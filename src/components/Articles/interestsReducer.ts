import { RootState } from '@store';
import {
  interestActionType,
  INTEREST_ADDED,
  INTEREST_REMOVED
} from './interestsActions';

export type interestType = string;

const initialState: interestType[] = ['React'];

export default function interestsReducer(
  state = initialState,
  action: interestActionType
): interestType[] {
  switch (action.type) {
    case INTEREST_ADDED:
      if (state.length < 5) return [...state, action.payload];
      return state;
    case INTEREST_REMOVED:
      return state.filter((interest) => interest !== action.payload);
    default:
      return state;
  }
}

export const selectInterests = (state: RootState) => state.interests;
