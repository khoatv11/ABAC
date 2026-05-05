// Data from CSVs (Parsed for UI Demonstration)
const departments = [
    { id: "BGD", name: "Ban giám đốc", parent: null, parentName: "#N/A" },
    { id: "P01", name: "Trung tâm Kinh doanh", parent: "BGD", parentName: "Ban giám đốc" },
    { id: "N01", name: "Nhóm Digital Sales", parent: "P01", parentName: "Trung tâm Kinh doanh" },
    { id: "N02", name: "Nhóm Direct Sales khu vực HN", parent: "P01", parentName: "Trung tâm Kinh doanh" },
    { id: "N10", name: "Nhóm Direct Sales khu vực HCM", parent: "P01", parentName: "Trung tâm Kinh doanh" },
    { id: "P02", name: "Phòng Marketing", parent: "BGD", parentName: "Ban giám đốc" },
    { id: "N04", name: "Nhóm Digital Marketing", parent: "P02", parentName: "Phòng Marketing" },
    { id: "P03", name: "Phòng Kỹ thuật", parent: "BGD", parentName: "Ban giám đốc" },
    { id: "P04", name: "Phòng vận hành", parent: "BGD", parentName: "Ban giám đốc" },
    { id: "P05", name: "Phòng Tài chính - Kế toán", parent: "BGD", parentName: "Ban giám đốc" },
    { id: "P06", name: "Phòng Pháp chế", parent: "BGD", parentName: "Ban giám đốc" },
    { id: "P07", name: "Phòng Nhân sự", parent: "BGD", parentName: "Ban giám đốc" },
    { id: "P08", name: "Phòng Mua hàng", parent: "BGD", parentName: "Ban giám đốc" }
];

const positions = [
    { id: "BGD0000", name: "Giám đốc công ty", deptId: "BGD", deptName: "Ban giám đốc", parent: null, parentName: "#N/A" },
    { id: "BGD0001", name: "Phó Giám đốc công ty", deptId: "BGD", deptName: "Ban giám đốc", parent: "BGD0000", parentName: "Giám đốc công ty" },
    { id: "BGD0002", name: "Giám đốc Khối kỹ thuật", deptId: "BGD", deptName: "Ban giám đốc", parent: "BGD0000", parentName: "Giám đốc công ty" },
    { id: "P010000", name: "Giám đốc Trung tâm Kinh doanh", deptId: "P01", deptName: "Trung tâm Kinh doanh", parent: "BGD0000", parentName: "Giám đốc công ty" },
    { id: "P010001", name: "Phó Giám đốc Trung tâm Kinh doanh", deptId: "P01", deptName: "Trung tâm Kinh doanh", parent: "P010000", parentName: "Giám đốc Trung tâm Kinh doanh" },
    { id: "N010000", name: "Trưởng nhóm Digital Sales", deptId: "N01", deptName: "Nhóm Digital Sales", parent: "P010000", parentName: "Giám đốc Trung tâm Kinh doanh" },
    { id: "N010001", name: "Nhân viên Digital Sales", deptId: "N01", deptName: "Nhóm Digital Sales", parent: "N010000", parentName: "Trưởng nhóm Digital Sales" },
    { id: "P020000", name: "Trưởng phòng Marketing", deptId: "P02", deptName: "Phòng Marketing", parent: "BGD0000", parentName: "Giám đốc công ty" },
    { id: "P030000", name: "Trưởng phòng Kỹ thuật", deptId: "P03", deptName: "Phòng Kỹ thuật", parent: "BGD0002", parentName: "Giám đốc Khối kỹ thuật" }
];

// Utility: Build Tree HTML
function buildTreeHTML(data, parentId = null) {
    const children = data.filter(item => item.parent === parentId);
    if (children.length === 0) return '';

    let html = `<ul>`;
    children.forEach(child => {
        html += `<li>
            <div class="node-card">
                <strong>${child.id}</strong>
                <span>${child.name}</span>
            </div>
            ${buildTreeHTML(data, child.id)}
        </li>`;
    });
    html += `</ul>`;
    return html;
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    
    // Setup Sidebar Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if(!item.dataset.target) return;
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
            document.getElementById(item.dataset.target).classList.add('active');
        });
    });

    // Populate Departments Table
    const deptTbody = document.getElementById('dept-tbody');
    departments.forEach(dept => {
        deptTbody.innerHTML += `
            <tr>
                <td><b>${dept.id}</b></td>
                <td>${dept.name}</td>
                <td>${dept.parentName}</td>
                <td>
                    <button class="btn btn-outline" style="padding: 0.25rem 0.5rem;"><ion-icon name="create-outline"></ion-icon></button>
                </td>
            </tr>
        `;
    });

    // Populate Departments Tree
    document.getElementById('dept-tree-container').innerHTML = buildTreeHTML(departments);

    // Populate Positions Table
    const posTbody = document.getElementById('pos-tbody');
    positions.forEach(pos => {
        posTbody.innerHTML += `
            <tr>
                <td><b>${pos.id}</b></td>
                <td>${pos.name}</td>
                <td>${pos.deptName}</td>
                <td>${pos.parentName}</td>
                <td>
                    <button class="btn btn-outline" style="padding: 0.25rem 0.5rem;" onclick="openView('position-form-view')"><ion-icon name="create-outline"></ion-icon></button>
                </td>
            </tr>
        `;
    });

    // Populate Positions Tree
    document.getElementById('pos-tree-container').innerHTML = buildTreeHTML(positions);

    // Populate Selects in Modals
    const deptSelects = [document.getElementById('dept-parent-select'), document.getElementById('pos-dept-select'), document.getElementById('user-dept-select')];
    departments.forEach(dept => {
        deptSelects.forEach(sel => {
            if(sel) sel.innerHTML += `<option value="${dept.id}">${dept.name}</option>`;
        });
    });

    const posSelects = [document.getElementById('pos-parent-select')];
    positions.forEach(pos => {
        posSelects.forEach(sel => {
            if(sel) sel.innerHTML += `<option value="${pos.id}">${pos.name}</option>`;
        });
    });

    // Dependency mapping for User Modal (Dept -> Positions)
    const userDeptSelect = document.getElementById('user-dept-select');
    const userPosSelect = document.getElementById('user-pos-select');
    
    if (userDeptSelect && userPosSelect) {
        userDeptSelect.addEventListener('change', () => {
            const selectedDepts = Array.from(userDeptSelect.selectedOptions).map(opt => opt.value);
            userPosSelect.innerHTML = '';
            
            const filteredPos = positions.filter(pos => selectedDepts.includes(pos.deptId));
            filteredPos.forEach(pos => {
                userPosSelect.innerHTML += `<option value="${pos.id}">${pos.name}</option>`;
            });
            if(filteredPos.length === 0) {
                userPosSelect.innerHTML = `<option disabled>Vui lòng chọn phòng ban trước</option>`;
            }
        });
    }

    // Render Function Permissions (2-levels)
    const funcPermContainer = document.getElementById('func-perm-container');
    if (funcPermContainer && typeof permissionGroups !== 'undefined') {
        let permHtml = '';
        permissionGroups.forEach(group => {
            permHtml += `
                <div class="perm-group" style="background: var(--surface); padding: 1rem; border-radius: var(--radius); border: 1px solid var(--border);">
                    <label class="checkbox-group" style="font-weight: 700; color: var(--primary);">
                        <input type="checkbox" onchange="toggleGroupPerms(this)"> ${group.name} (${group.code})
                    </label>
                    <div class="perm-children" style="margin-left: 2rem; margin-top: 0.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            `;
            if (group.children && group.children.length > 0) {
                group.children.forEach(child => {
                    permHtml += `
                        <label class="checkbox-group" style="font-weight: 400;">
                            <input type="checkbox" class="child-perm"> ${child.name}
                        </label>
                    `;
                });
            }
            permHtml += `</div></div>`;
        });
        funcPermContainer.innerHTML = permHtml;
    }
});

// UI Helpers
window.openView = function(viewId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(i => i.classList.remove('active'));
    
    let targetNav = viewId;
    if(viewId === 'position-form-view') targetNav = 'positions';
    
    const activeNav = document.querySelector(`.nav-item[data-target="${targetNav}"]`);
    if(activeNav) activeNav.classList.add('active');
};

window.switchFormTab = function(element, targetId) {
    const parent = element.parentElement;
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    
    const card = element.closest('.card');
    card.querySelectorAll('.form-tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(targetId).style.display = 'block';
};

window.toggleGroupPerms = function(el) {
    const childrenContainer = el.closest('.perm-group').querySelector('.perm-children');
    if (childrenContainer) {
        childrenContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = el.checked;
        });
    }
};

window.switchTab = function(element, targetId) {
    const parent = element.parentElement;
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    
    const card = parent.parentElement;
    card.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(targetId).style.display = 'block';
};

window.switchDataTab = function(element, targetId) {
    const parent = element.parentElement;
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    
    const container = parent.parentElement;
    container.querySelectorAll('.data-tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(targetId).style.display = 'block';
};

window.switchVTab = function(element, targetId) {
    const parent = element.parentElement;
    parent.querySelectorAll('.v-tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    
    const container = parent.nextElementSibling;
    container.querySelectorAll('.v-tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(targetId).style.display = 'block';
};

window.openModal = function(id) {
    document.getElementById(id).classList.add('active');
};

window.closeModal = function(id) {
    document.getElementById(id).classList.remove('active');
};

window.addConcurrentPos = function() {
    const deptSelect = document.getElementById('concurrent-dept-select');
    const posSelect = document.getElementById('concurrent-pos-select');
    
    const deptName = deptSelect.options[deptSelect.selectedIndex]?.text;
    const posName = posSelect.options[posSelect.selectedIndex]?.text;
    
    if(!deptSelect.value || !posSelect.value) {
        alert("Vui lòng chọn cả phòng ban và chức vụ kiêm nhiệm!");
        return;
    }

    const tbody = document.getElementById('concurrent-pos-table');
    const emptyMsg = document.getElementById('empty-concurrent-msg');
    if(emptyMsg) emptyMsg.style.display = 'none';

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${deptName}</td>
        <td>${posName}</td>
        <td style="text-align: center;">
            <button type="button" class="btn btn-outline" style="padding: 0.25rem 0.5rem; color: #ef4444; border-color: #fca5a5;" onclick="this.closest('tr').remove(); checkEmptyConcurrentPos();"><ion-icon name="trash-outline"></ion-icon></button>
        </td>
    `;
    tbody.appendChild(tr);
    closeModal('concurrent-pos-modal');
    
    // reset form
    deptSelect.value = '';
    posSelect.value = '';
};

window.checkEmptyConcurrentPos = function() {
    const tbody = document.getElementById('concurrent-pos-table');
    const rows = tbody.querySelectorAll('tr:not(#empty-concurrent-msg)');
    const emptyMsg = document.getElementById('empty-concurrent-msg');
    if(rows.length === 0 && emptyMsg) {
        emptyMsg.style.display = '';
    }
};

window.assignUserToPos = function() {
    const userSelect = document.getElementById('assign-user-select');
    const roleSelect = document.getElementById('assign-user-role-type');
    
    const userText = userSelect.options[userSelect.selectedIndex]?.text;
    const roleText = roleSelect.value;
    
    if(!userSelect.value || !roleText) {
        alert("Vui lòng chọn người dùng và loại chức vụ!");
        return;
    }

    // Parse userText "Nguyễn Văn A (nva@company.com)"
    let name = userText;
    let email = "";
    if(userText.includes('(')) {
        name = userText.split('(')[0].trim();
        email = userText.split('(')[1].replace(')','').trim();
    }

    const tbody = document.getElementById('pos-users-table');
    const emptyMsg = document.getElementById('empty-pos-users-msg');
    if(emptyMsg) emptyMsg.style.display = 'none';

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td><span class="tag" style="${roleText === 'Chức vụ chính' ? 'background: rgba(79, 70, 229, 0.1); color: var(--primary);' : ''}">${roleText}</span></td>
        <td style="text-align: center;">
            <button type="button" class="btn btn-outline" style="padding: 0.25rem 0.5rem; color: #ef4444; border-color: #fca5a5;" onclick="this.closest('tr').remove(); checkEmptyPosUsers();"><ion-icon name="trash-outline"></ion-icon></button>
        </td>
    `;
    tbody.appendChild(tr);
    closeModal('assign-user-modal');
    
    // reset form
    userSelect.value = '';
    roleSelect.value = 'Chức vụ chính';
};

window.checkEmptyPosUsers = function() {
    const tbody = document.getElementById('pos-users-table');
    const rows = tbody.querySelectorAll('tr:not(#empty-pos-users-msg)');
    const emptyMsg = document.getElementById('empty-pos-users-msg');
    if(rows.length === 0 && emptyMsg) {
        emptyMsg.style.display = '';
    }
};
