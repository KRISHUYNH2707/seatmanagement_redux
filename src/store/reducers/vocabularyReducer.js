import { ADD_VOCABULARY } from "../types/vocabularyType";

const DEFAULT_STATE = {
  vocabularyList: [],
  historyList: [],
  isOnlyFavorited: false,
};

export const vocabularyReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  const addHistory = (action, en, vi) => {
    const historyItem = {
      id: Date.now(),
      action,
      en,
      vi,
      createdDate: new Date().toLocaleString(),
    };

    const data = [...state.historyList];

    // unshift: thêm 1 phần tử vào mạng ở vị trí đầu tiên
    // push: them 1 phần tử vào mảng ở vị trí cuối cùng
    data.unshift(historyItem);

    state.historyList = data;
  };

  switch (type) {
    case ADD_VOCABULARY: {
      const data = [...state.vocabularyList];

      data.unshift({
        ...payload,
        id: Date.now(),
        isFavorited: false,
      });

      state.vocabularyList = data;
      // add history
      addHistory("ADD", payload.en, payload.vi);

      break;
    }

    case "UPDATE_FAVORITE": {
      // nested
      const data = JSON.parse(JSON.stringify(state.vocabularyList));
      const idx = data.findIndex((element) => element.id === payload.id);

      data[idx].isFavorited = !data[idx].isFavorited;

      state.vocabularyList = data;
      // add history
      addHistory(
        data[idx].isFavorited ? "LIKE" : "UNLIKE",
        data[idx].en,
        data[idx].vi
      );

      break;
    }

    case "REMOVE_VOCABULARY": {
      // debugger: sử dụng để debug lỗi

      const data = [...state.vocabularyList];
      const idx = data.findIndex((ele) => ele.id === payload.id);

      // add history
      addHistory("REMOVE", data[idx].en, data[idx].vi);

      data.splice(idx, 1);

      state.vocabularyList = data;

      break;
    }

    case "UPDATE_ONLY_FAVORITED": {
      state.isOnlyFavorited = payload;

      break;
    }

    default:
      break;
  }

  return { ...state };
};
