export const INTEREST_ADDED = 'interests/added';
export const INTEREST_REMOVED = 'interests/removed';

export type interestActionType = {
  type: string;
  payload: string;
};

export const addInterest = (text: string) => ({
  type: INTEREST_ADDED,
  payload: text
});

export const removeInterest = (text: string) => ({
  type: INTEREST_REMOVED,
  payload: text
});
