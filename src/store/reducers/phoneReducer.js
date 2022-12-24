import data from "../../data/DataPhones.json";

const DEFAULT_STATE = {
  cart: [],
  phoneDetail: data[0],
};

export const phoneReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PHONE_DETAIL":
      state.phoneDetail = payload;

      break;

    case "ADD_TO_CART": {
      const data = [...state.cart];

      // kiếm sản phẩm đã tồn tại trong giỏ hàng chưa.
      const idx = data.findIndex((element) => element.maSP === payload.maSP);

      if (idx === -1) {
        data.push({ ...payload, soLuong: 1 });
      } else {
        // đã tồn tại điện thoại trog giỏ hàng
        data[idx].soLuong += 1;
      }

      state.cart = data;

      break;
    }

    case "HANDLE_QUANTITY": {
      const { phone, isIncrease } = payload;
      const data = [...state.cart];

      const idx = data.findIndex((ele) => ele.maSP === phone.maSP);

      if (isIncrease) {
        // khi click vào button +
        data[idx].soLuong += 1;
      } else {
        // khi click vào button -
        if (data[idx].soLuong > 1) {
          data[idx].soLuong -= 1;
        } else if (window.confirm("Bạn có muốn xóa không?")) {
          // khi user click vào xác nhận
          data.splice(idx, 1);
        }
      }

      state.cart = data;

      break;
    }

    case "HANDLE_DELETE": {
      const data = [...state.cart];
      const idx = data.findIndex((element) => element.maSP === payload.maSP);

      data.splice(idx, 1);

      state.cart = data;

      break;
    }

    default:
      break;
  }

  return { ...state };
};
