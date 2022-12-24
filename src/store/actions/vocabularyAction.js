import { ADD_VOCABULARY, REMOVE_VOCABULARY } from "../types/vocabularyType";

export const addVocabularyAction = (payload) => {
  return {
    type: ADD_VOCABULARY,
    payload,
  };
};

export const removeVocabularyAction = (payload) => {
  return {
    type: REMOVE_VOCABULARY,
    payload,
  };
};
