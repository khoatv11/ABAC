const permissionGroups = [{
    "id" : "c784285d-1043-4de1-9999-e5b4f56e0a20",
    "name" : "Nhóm phân quyền",
    "code" : "FUNC_ADMIN_GROUP_PERM",
    "children" : [ {
      "id" : "e9d401ee-e8bc-4f22-936c-acf1caaeede1",
      "name" : "Xem danh sách nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_LIST",
      "methodType" : "GET",
      "endpoint" : "api/v1/iam/groups"
    }, {
      "id" : "84c66b76-4bd6-4e8f-8293-35eee2c63791",
      "name" : "Xem quyền của nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_PERMS",
      "methodType" : "GET",
      "endpoint" : "api/v1/iam/groups/{groupId}/permissions",
      "dependsOn" : {
        "id" : "e9d401ee-e8bc-4f22-936c-acf1caaeede1",
        "name" : "Xem danh sách nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_LIST"
      }
    }, {
      "id" : "fc53c87d-e275-4b78-b1f6-cbf93022544e",
      "name" : "Xem người dùng thuộc nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_USERS",
      "methodType" : "GET",
      "endpoint" : "api/v1/iam/groups/{groupId}/users",
      "dependsOn" : {
        "id" : "84c66b76-4bd6-4e8f-8293-35eee2c63791",
        "name" : "Xem quyền của nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_PERMS"
      }
    }, {
      "id" : "f35d2170-98d2-45e0-8a02-4cf8b72a55eb",
      "name" : "Thêm mới nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_CREATE",
      "methodType" : "POST",
      "endpoint" : "api/v1/iam/groups",
      "dependsOn" : {
        "id" : "e9d401ee-e8bc-4f22-936c-acf1caaeede1",
        "name" : "Xem danh sách nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_LIST"
      }
    }, {
      "id" : "8851b614-49ee-4aff-8115-a2b7893285f7",
      "name" : "Cập nhật nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_UPDATE",
      "methodType" : "PUT",
      "endpoint" : "api/v1/iam/groups/{groupId}",
      "dependsOn" : {
        "id" : "e9d401ee-e8bc-4f22-936c-acf1caaeede1",
        "name" : "Xem danh sách nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_LIST"
      }
    }, {
      "id" : "4b20a10a-74d4-4310-ad0d-f9a9f1bd5e3c",
      "name" : "Cập nhật quyền cho nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_UPDATE_PERMS",
      "methodType" : "POST",
      "endpoint" : "api/v1/iam/groups/{groupId}/permissions",
      "dependsOn" : {
        "id" : "e9d401ee-e8bc-4f22-936c-acf1caaeede1",
        "name" : "Xem danh sách nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_LIST"
      }
    }, {
      "id" : "a5fc86c7-a59a-480c-aee1-e8f965f2a792",
      "name" : "Thêm người dùng cho nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_ADD_USERS",
      "methodType" : "POST",
      "endpoint" : "api/v1/iam/groups/{groupId}/users",
      "dependsOn" : {
        "id" : "fc53c87d-e275-4b78-b1f6-cbf93022544e",
        "name" : "Xem người dùng thuộc nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_USERS"
      }
    }, {
      "id" : "287ccd74-aa93-43ea-a5f2-cba04444fa5f",
      "name" : "Xóa người dùng cho nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_REMOVE_USERS",
      "methodType" : "DELETE",
      "endpoint" : "api/v1/iam/groups/{groupId}/users",
      "dependsOn" : {
        "id" : "fc53c87d-e275-4b78-b1f6-cbf93022544e",
        "name" : "Xem người dùng thuộc nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_VIEW_USERS"
      }
    }, {
      "id" : "ff491435-0f34-44fa-b6de-29a2dd3039f1",
      "name" : "Kích hoạt/Vô hiệu hóa nhóm phân quyền",
      "code" : "FUNC_ADMIN_GROUP_PERM_TOGGLE_STATUS",
      "methodType" : "PATCH",
      "endpoint" : "api/v1/iam/groups/{groupId}/status",
      "dependsOn" : {
        "id" : "8851b614-49ee-4aff-8115-a2b7893285f7",
        "name" : "Cập nhật nhóm phân quyền",
        "code" : "FUNC_ADMIN_GROUP_PERM_UPDATE"
      }
    } ]
  }, {
    "id" : "08a8fb9e-5cd0-4906-a963-8e993aa54cb3",
    "name" : "Quản lý nhà bán hàng",
    "code" : "FUNC_ADMIN_PARTNER_MGMT",
    "children" : [ {
      "id" : "c7de5d36-8214-4f1a-9200-851e5944780b",
      "name" : "Xem danh sách và trạng thái nhà bán hàng",
      "code" : "FUNC_ADMIN_PARTNER_MGMT_VIEW_LIST",
      "methodType" : "GET",
      "endpoint" : "api/v1/customer/companies"
    }, {
      "id" : "9b4c1b9b-bee5-4e2a-9d71-2abc645d283c",
      "name" : "Xem hồ sơ nhà bán hàng",
      "code" : "FUNC_ADMIN_PARTNER_MGMT_VIEW_DETAIL",
      "methodType" : "GET",
      "endpoint" : "api/v1/customer/companies/{companyId}",
      "dependsOn" : {
        "id" : "c7de5d36-8214-4f1a-9200-851e5944780b",
        "name" : "Xem danh sách và trạng thái nhà bán hàng",
        "code" : "FUNC_ADMIN_PARTNER_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "adf9f781-5f6a-4ffe-8376-3ab78093752e",
      "name" : "Xem lịch sử nhà bán hàng",
      "code" : "FUNC_ADMIN_PARTNER_MGMT_VIEW_HISTORY",
      "methodType" : "GET",
      "endpoint" : "api/v1/customer/companies/{companyId}/change-histories",
      "dependsOn" : {
        "id" : "c7de5d36-8214-4f1a-9200-851e5944780b",
        "name" : "Xem danh sách và trạng thái nhà bán hàng",
        "code" : "FUNC_ADMIN_PARTNER_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "9cf84013-9cb9-4351-92c7-1ede42bb65c4",
      "name" : "Từ chối thông tin nhà bán hàng",
      "code" : "FUNC_ADMIN_PARTNER_MGMT_REJECT",
      "endpoint" : "api/v1/customer/companies/{companyId}/denial",
      "dependsOn" : {
        "id" : "9b4c1b9b-bee5-4e2a-9d71-2abc645d283c",
        "name" : "Xem hồ sơ nhà bán hàng",
        "code" : "FUNC_ADMIN_PARTNER_MGMT_VIEW_DETAIL"
      }
    }, {
      "id" : "1c636d68-e786-4ec5-9a3d-f9d5306ee39d",
      "name" : "Phê duyệt thông tin nhà bán hàng",
      "code" : "FUNC_ADMIN_PARTNER_MGMT_APPROVE",
      "methodType" : "POST",
      "endpoint" : "api/v1/customer/companies/{companyId}/approval",
      "dependsOn" : {
        "id" : "9b4c1b9b-bee5-4e2a-9d71-2abc645d283c",
        "name" : "Xem hồ sơ nhà bán hàng",
        "code" : "FUNC_ADMIN_PARTNER_MGMT_VIEW_DETAIL"
      }
    } ]
  }, {
    "id" : "8176c811-fbb4-4138-b736-29db64f20387",
    "name" : "Quản lý danh mục",
    "code" : "FUNC_ADMIN_CATEGORY_MGMT",
    "children" : [ {
      "id" : "1c27dfd8-3995-49a7-82b4-26468b09af4d",
      "name" : "Xem danh sách danh mục sản phẩm",
      "code" : "FUNC_ADMIN_CATEGORY_MGMT_VIEW_LIST",
      "methodType" : "GET",
      "endpoint" : "api/v1/product/categories"
    }, {
      "id" : "c7320a4d-36c7-4943-823c-0473c9a14cc7",
      "name" : "Thêm mới danh mục sản phẩm",
      "code" : "FUNC_ADMIN_CATEGORY_MGMT_CREATE",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/categories",
      "dependsOn" : {
        "id" : "1c27dfd8-3995-49a7-82b4-26468b09af4d",
        "name" : "Xem danh sách danh mục sản phẩm",
        "code" : "FUNC_ADMIN_CATEGORY_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "7e72f25b-f83a-46aa-8cb0-0494e5e3c7da",
      "name" : "Chỉnh sửa danh mục sản phẩm",
      "code" : "FUNC_ADMIN_CATEGORY_MGMT_UPDATE",
      "methodType" : "PUT",
      "endpoint" : "api/v1/product/categories/{categoryId}",
      "dependsOn" : {
        "id" : "1c27dfd8-3995-49a7-82b4-26468b09af4d",
        "name" : "Xem danh sách danh mục sản phẩm",
        "code" : "FUNC_ADMIN_CATEGORY_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "a9a2d235-d807-4eda-b76b-6a22c39e1af8",
      "name" : "Thay đổi trạng thái danh mục",
      "code" : "FUNC_ADMIN_CATEGORY_MGMT_TOGGLE_STATUS",
      "methodType" : "PATCH",
      "endpoint" : "api/v1/product/categories/{categoryId}/status",
      "dependsOn" : {
        "id" : "7e72f25b-f83a-46aa-8cb0-0494e5e3c7da",
        "name" : "Chỉnh sửa danh mục sản phẩm",
        "code" : "FUNC_ADMIN_CATEGORY_MGMT_UPDATE"
      }
    }, {
      "id" : "2134b6ca-3bbb-4770-96c4-41a39ddd4b68",
      "name" : "Từ chối danh mục sản phẩm",
      "code" : "FUNC_ADMIN_CATEGORY_MGMT_REJECT",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/categories/{categoryId}/denial",
      "dependsOn" : {
        "id" : "1c27dfd8-3995-49a7-82b4-26468b09af4d",
        "name" : "Xem danh sách danh mục sản phẩm",
        "code" : "FUNC_ADMIN_CATEGORY_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "6a5ef3ba-eca4-43c7-99df-bd5ffcb280c9",
      "name" : "Phê duyệt danh mục sản phẩm",
      "code" : "FUNC_ADMIN_CATEGORY_MGMT_APPROVE",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/categories/{categoryId}/approval",
      "dependsOn" : {
        "id" : "1c27dfd8-3995-49a7-82b4-26468b09af4d",
        "name" : "Xem danh sách danh mục sản phẩm",
        "code" : "FUNC_ADMIN_CATEGORY_MGMT_VIEW_LIST"
      }
    } ]
  }, {
    "id" : "b6c89949-9704-4647-94ee-3d8f75aad2ba",
    "name" : "Cấu hình thuộc tính",
    "code" : "FUNC_ADMIN_PRODUCT_TPL",
    "children" : [ {
      "id" : "5e3fd920-3cba-48c0-bb2e-b03d18c9f4c4",
      "name" : "Xem danh sách cấu hình sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_TPL_VIEW_LIST",
      "methodType" : "GET",
      "endpoint" : "api/v1/product/product-templates"
    }, {
      "id" : "f1b1ceda-0ae5-45f0-b803-40321b68d501",
      "name" : "Thêm mới cấu hình sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_TPL_CREATE",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/product-templates",
      "dependsOn" : {
        "id" : "5e3fd920-3cba-48c0-bb2e-b03d18c9f4c4",
        "name" : "Xem danh sách cấu hình sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_TPL_VIEW_LIST"
      }
    }, {
      "id" : "c440e2da-af55-41e2-9ca3-4a6a3b8de1b0",
      "name" : "Chỉnh sửa cấu hình sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_TPL_UPDATE",
      "methodType" : "PUT",
      "endpoint" : "api/v1/product/product-templates/{productTemplateId}",
      "dependsOn" : {
        "id" : "5e3fd920-3cba-48c0-bb2e-b03d18c9f4c4",
        "name" : "Xem danh sách cấu hình sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_TPL_VIEW_LIST"
      }
    }, {
      "id" : "95fa830e-978f-491a-95a8-5c20a5c12439",
      "name" : "Thay đổi trạng thái cấu hình",
      "code" : "FUNC_ADMIN_PRODUCT_TPL_TOGGLE_STATUS",
      "methodType" : "PATCH",
      "endpoint" : "api/v1/product/product-templates/{productTemplateId}/status",
      "dependsOn" : {
        "id" : "c440e2da-af55-41e2-9ca3-4a6a3b8de1b0",
        "name" : "Chỉnh sửa cấu hình sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_TPL_UPDATE"
      }
    } ]
  }, {
    "id" : "4e38411a-ab36-47e3-8256-b7b1556ab564",
    "name" : "Quản lý sản phẩm",
    "code" : "FUNC_ADMIN_PRODUCT_MGMT",
    "children" : [ {
      "id" : "7c11e4a0-3780-4b63-b6c5-33ebf8c6817d",
      "name" : "Xem danh sách sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_LIST",
      "methodType" : "GET",
      "endpoint" : "api/v1/product/products"
    }, {
      "id" : "3a317d5c-a362-4f55-85b3-8c0e4164675b",
      "name" : "Xem chi tiết sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_DETAIL",
      "dependsOn" : {
        "id" : "7c11e4a0-3780-4b63-b6c5-33ebf8c6817d",
        "name" : "Xem danh sách sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "40c47d7f-7fd6-4e29-a83a-0845ad1af664",
      "name" : "Xem lịch sử sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_HISTORY",
      "dependsOn" : {
        "id" : "3a317d5c-a362-4f55-85b3-8c0e4164675b",
        "name" : "Xem chi tiết sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_DETAIL"
      }
    }, {
      "id" : "86c7bb49-59bc-4221-91dc-73b37003e1da",
      "name" : "Thêm mới sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_MGMT_CREATE",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/products/{productId}",
      "dependsOn" : {
        "id" : "7c11e4a0-3780-4b63-b6c5-33ebf8c6817d",
        "name" : "Xem danh sách sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "34ba8700-4c6a-41b7-98a6-61c3d37c811d",
      "name" : "Chỉnh sửa sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_MGMT_UPDATE",
      "methodType" : "PUT",
      "endpoint" : "api/v1/product/products/{productId}",
      "dependsOn" : {
        "id" : "7c11e4a0-3780-4b63-b6c5-33ebf8c6817d",
        "name" : "Xem danh sách sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "5a42581d-00a0-485f-8b92-09b407ad75b0",
      "name" : "Thay đổi trạng thái sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_MGMT_TOGGLE_STATUS",
      "methodType" : "PATCH",
      "endpoint" : "api/v1/product/products/{productId}/status",
      "dependsOn" : {
        "id" : "34ba8700-4c6a-41b7-98a6-61c3d37c811d",
        "name" : "Chỉnh sửa sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_MGMT_UPDATE"
      }
    }, {
      "id" : "a8bc2023-76dd-45a2-a310-24a268cef06a",
      "name" : "Phê duyệt sản phẩm",
      "code" : "FUNC_ADMIN_PRODUCT_MGMT_APPROVE",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/products/{productId}/approval",
      "dependsOn" : {
        "id" : "7c11e4a0-3780-4b63-b6c5-33ebf8c6817d",
        "name" : "Xem danh sách sản phẩm",
        "code" : "FUNC_ADMIN_PRODUCT_MGMT_VIEW_LIST"
      }
    } ]
  }, {
    "id" : "08a18b3d-1c7e-4b93-a7ed-902acd68838b",
    "name" : "Quản lý lĩnh vực",
    "code" : "FUNC_ADMIN_VERTICAL_MGMT",
    "children" : [ {
      "id" : "ac882437-3844-4c8e-9c24-0e8514188ca2",
      "name" : "Xem danh sách lĩnh vực",
      "code" : "FUNC_ADMIN_VERTICAL_MGMT_VIEW_LIST",
      "methodType" : "GET",
      "endpoint" : "api/v1/product/vertical-packs"
    }, {
      "id" : "5f714886-6947-4f6b-b2f6-b99a332e803d",
      "name" : "Thêm mới lĩnh vực",
      "code" : "FUNC_ADMIN_VERTICAL_MGMT_CREATE",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/vertical-packs",
      "dependsOn" : {
        "id" : "ac882437-3844-4c8e-9c24-0e8514188ca2",
        "name" : "Xem danh sách lĩnh vực",
        "code" : "FUNC_ADMIN_VERTICAL_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "d181e5d7-c5a6-46d2-a439-339b35377490",
      "name" : "Chỉnh sửa lĩnh vực",
      "code" : "FUNC_ADMIN_VERTICAL_MGMT_UPDATE",
      "methodType" : "PUT",
      "endpoint" : "api/v1/product/vertical-packs/{verticalPackId}",
      "dependsOn" : {
        "id" : "ac882437-3844-4c8e-9c24-0e8514188ca2",
        "name" : "Xem danh sách lĩnh vực",
        "code" : "FUNC_ADMIN_VERTICAL_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "f36de492-4acc-48de-9684-4c144ea58d3f",
      "name" : "Thay đổi trạng thái lĩnh vực",
      "code" : "FUNC_ADMIN_VERTICAL_MGMT_TOGGLE_STATUS",
      "methodType" : "PATCH",
      "endpoint" : "api/v1/product/vertical-packs/{verticalPackId}/status",
      "dependsOn" : {
        "id" : "d181e5d7-c5a6-46d2-a439-339b35377490",
        "name" : "Chỉnh sửa lĩnh vực",
        "code" : "FUNC_ADMIN_VERTICAL_MGMT_UPDATE"
      }
    }, {
      "id" : "ac9e4a57-59cf-4c62-9937-660eea22a995",
      "name" : "Phê duyệt đối tác đăng ký lĩnh vực",
      "code" : "FUNC_ADMIN_VERTICAL_MGMT_APPROVE",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/vertical-packs/{verticalPackId}/approval",
      "dependsOn" : {
        "id" : "ac882437-3844-4c8e-9c24-0e8514188ca2",
        "name" : "Xem danh sách lĩnh vực",
        "code" : "FUNC_ADMIN_VERTICAL_MGMT_VIEW_LIST"
      }
    }, {
      "id" : "d7791efc-2a89-4e97-a3ae-89be2ab9c83a",
      "name" : "Từ chối đối tác đăng ký lĩnh vực",
      "code" : "FUNC_ADMIN_VERTICAL_MGMT_REJECT",
      "methodType" : "POST",
      "endpoint" : "api/v1/product/vertical-packs/{verticalPackId}/denial",
      "dependsOn" : {
        "id" : "ac882437-3844-4c8e-9c24-0e8514188ca2",
        "name" : "Xem danh sách lĩnh vực",
        "code" : "FUNC_ADMIN_VERTICAL_MGMT_VIEW_LIST"
      }
    } ]
  }, {
    "id" : "90972361-9e65-44f7-82c3-b369317ee195",
    "name" : "Quản lý gói giải pháp",
    "code" : "FUNC_ADMIN_SOLUTION_PACK",
    "children" : [ {
      "id" : "2083b092-3cdd-43a0-acb8-fe405c286cd8",
      "name" : "Xem danh sách gói giải pháp",
      "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_LIST"
    }, {
      "id" : "a82554f4-92c7-4448-9eb5-26d18cab1346",
      "name" : "Xem chi tiết gói giải pháp",
      "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_DETAIL",
      "dependsOn" : {
        "id" : "2083b092-3cdd-43a0-acb8-fe405c286cd8",
        "name" : "Xem danh sách gói giải pháp",
        "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_LIST"
      }
    }, {
      "id" : "538fb1b2-e11d-46d5-a0a6-154c0bd8eb1c",
      "name" : "Lịch sử thay đổi gói giải pháp",
      "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_HISTORY",
      "dependsOn" : {
        "id" : "a82554f4-92c7-4448-9eb5-26d18cab1346",
        "name" : "Xem chi tiết gói giải pháp",
        "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_DETAIL"
      }
    }, {
      "id" : "d7c4894e-8dec-4ed4-a414-2c7bbe6bfd10",
      "name" : "Thêm mới gói giải pháp",
      "code" : "FUNC_ADMIN_SOLUTION_PACK_CREATE",
      "dependsOn" : {
        "id" : "2083b092-3cdd-43a0-acb8-fe405c286cd8",
        "name" : "Xem danh sách gói giải pháp",
        "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_LIST"
      }
    }, {
      "id" : "9cc62b2a-0586-4352-a92a-a71267e80dc3",
      "name" : "Chỉnh sửa gói giải pháp",
      "code" : "FUNC_ADMIN_SOLUTION_PACK_UPDATE",
      "dependsOn" : {
        "id" : "2083b092-3cdd-43a0-acb8-fe405c286cd8",
        "name" : "Xem danh sách gói giải pháp",
        "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_LIST"
      }
    }, {
      "id" : "4e262ba9-2b5b-42e1-b5f5-e4099fe20652",
      "name" : "Thay đổi trạng thái gói giải pháp",
      "code" : "FUNC_ADMIN_SOLUTION_PACK_TOGGLE_STATUS",
      "dependsOn" : {
        "id" : "9cc62b2a-0586-4352-a92a-a71267e80dc3",
        "name" : "Chỉnh sửa gói giải pháp",
        "code" : "FUNC_ADMIN_SOLUTION_PACK_UPDATE"
      }
    }, {
      "id" : "fd7b54ab-05ef-41fe-a169-2e987478a5bd",
      "name" : "Phê duyệt gói giải pháp",
      "code" : "FUNC_ADMIN_SOLUTION_PACK_APPROVE",
      "dependsOn" : {
        "id" : "2083b092-3cdd-43a0-acb8-fe405c286cd8",
        "name" : "Xem danh sách gói giải pháp",
        "code" : "FUNC_ADMIN_SOLUTION_PACK_VIEW_LIST"
      }
    } ]
  }, {
    "id" : "1aa252d9-d6f5-477b-8d2a-81dbea53d2b0",
    "name" : "Quản lý bảng giá",
    "code" : "FUNC_ADMIN_PRICE_LIST",
    "children" : [ {
      "id" : "109203a0-682a-48af-a82c-9c307858714b",
      "name" : "Xem danh sách bảng giá",
      "code" : "FUNC_ADMIN_PRICE_LIST_VIEW_LIST"
    }, {
      "id" : "71e3f113-8b95-4e11-a179-060fc59b0937",
      "name" : "Thêm mới bảng giá",
      "code" : "FUNC_ADMIN_PRICE_LIST_CREATE",
      "dependsOn" : {
        "id" : "109203a0-682a-48af-a82c-9c307858714b",
        "name" : "Xem danh sách bảng giá",
        "code" : "FUNC_ADMIN_PRICE_LIST_VIEW_LIST"
      }
    }, {
      "id" : "d7b89dfd-3e82-4495-9255-f25323ef4c94",
      "name" : "Chỉnh sửa bảng giá",
      "code" : "FUNC_ADMIN_PRICE_LIST_UPDATE",
      "dependsOn" : {
        "id" : "109203a0-682a-48af-a82c-9c307858714b",
        "name" : "Xem danh sách bảng giá",
        "code" : "FUNC_ADMIN_PRICE_LIST_VIEW_LIST"
      }
    }, {
      "id" : "581093bb-ecb5-43fc-a6bf-0ba9d1c45ac1",
      "name" : "Thay đổi trạng thái bảng giá",
      "code" : "FUNC_ADMIN_PRICE_LIST_TOGGLE_STATUS",
      "dependsOn" : {
        "id" : "d7b89dfd-3e82-4495-9255-f25323ef4c94",
        "name" : "Chỉnh sửa bảng giá",
        "code" : "FUNC_ADMIN_PRICE_LIST_UPDATE"
      }
    }, {
      "id" : "75b88a7a-d5eb-4af2-8348-7aca8c31623d",
      "name" : "Phê duyệt bảng giá",
      "code" : "FUNC_ADMIN_PRICE_LIST_APPROVE",
      "dependsOn" : {
        "id" : "109203a0-682a-48af-a82c-9c307858714b",
        "name" : "Xem danh sách bảng giá",
        "code" : "FUNC_ADMIN_PRICE_LIST_VIEW_LIST"
      }
    } ]
  }, {
    "id" : "baed96fe-0945-4a4a-9e2f-f39af225543f",
    "name" : "Quản lý chương trình khuyến mại",
    "code" : "FUNC_ADMIN_PROMOTION",
    "children" : [ {
      "id" : "d8477413-a476-4d8d-9a16-a7baee35041b",
      "name" : "Xem danh sách chương trình khuyến mại",
      "code" : "FUNC_ADMIN_PROMOTION_VIEW_LIST"
    }, {
      "id" : "0f03fbe3-f00c-45a5-8945-7564d5b253b8",
      "name" : "Thêm mới chương trình khuyến mại",
      "code" : "FUNC_ADMIN_PROMOTION_CREATE",
      "dependsOn" : {
        "id" : "d8477413-a476-4d8d-9a16-a7baee35041b",
        "name" : "Xem danh sách chương trình khuyến mại",
        "code" : "FUNC_ADMIN_PROMOTION_VIEW_LIST"
      }
    }, {
      "id" : "694ba3be-e7d3-46fc-aa4d-cf2f01d9e114",
      "name" : "Chỉnh sửa chương trình khuyến mại",
      "code" : "FUNC_ADMIN_PROMOTION_UPDATE",
      "dependsOn" : {
        "id" : "d8477413-a476-4d8d-9a16-a7baee35041b",
        "name" : "Xem danh sách chương trình khuyến mại",
        "code" : "FUNC_ADMIN_PROMOTION_VIEW_LIST"
      }
    }, {
      "id" : "820c9ab4-7ca7-4c34-a846-b0fc4e57878c",
      "name" : "Thay đổi trạng thái chương trình",
      "code" : "FUNC_ADMIN_PROMOTION_TOGGLE_STATUS",
      "dependsOn" : {
        "id" : "694ba3be-e7d3-46fc-aa4d-cf2f01d9e114",
        "name" : "Chỉnh sửa chương trình khuyến mại",
        "code" : "FUNC_ADMIN_PROMOTION_UPDATE"
      }
    }, {
      "id" : "2c3ec54d-e0b4-4982-b5c1-a583fa25fd34",
      "name" : "Từ chối chương trình khuyến mại",
      "code" : "FUNC_ADMIN_PROMOTION_REJECT",
      "dependsOn" : {
        "id" : "d8477413-a476-4d8d-9a16-a7baee35041b",
        "name" : "Xem danh sách chương trình khuyến mại",
        "code" : "FUNC_ADMIN_PROMOTION_VIEW_LIST"
      }
    }, {
      "id" : "931cff1b-dc97-41f4-b355-54e8d7207ca2",
      "name" : "Phê duyệt chương trình khuyến mại",
      "code" : "FUNC_ADMIN_PROMOTION_APPROVE",
      "dependsOn" : {
        "id" : "d8477413-a476-4d8d-9a16-a7baee35041b",
        "name" : "Xem danh sách chương trình khuyến mại",
        "code" : "FUNC_ADMIN_PROMOTION_VIEW_LIST"
      }
    } ]
  }];
