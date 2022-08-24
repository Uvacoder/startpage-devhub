import { ReactComponent as CheckMarkIcon } from '@assets/check.svg';
import { interestType } from './interestsReducer';

interface IProps {
  data: interestType[];
  onAdd: (interest: string) => void;
  onDelete: (interest: string) => void;
}

const INTERESTS = [
  'React',
  'Web',
  'NextJS',
  'JavaScript',
  'Web Development',
  'Programming',
  'Redux',
  'React Native',
  'Typescript',
  'Tailwind'
];

export default function InterestsForm({ onAdd, onDelete, data }: IProps) {
  const ACTIVE_STYLE = 'bg-blue-600';

  const checkIfUserInterest = (value: string) => {
    return data.includes(value);
  };

  return (
    <>
      <h1 className="text-2xl">Manage my interests</h1>
      <div className="flex flex-wrap gap-4">
        {INTERESTS.map((interest) => (
          <div
            key={interest}
            className={`flex cursor-pointer items-center gap-2 rounded bg-stone-600 px-4 py-1 transition ${
              checkIfUserInterest(interest) ? ACTIVE_STYLE : ''
            }`}
            onClick={() =>
              checkIfUserInterest(interest)
                ? onDelete(interest)
                : onAdd(interest)
            }
          >
            {checkIfUserInterest(interest) && <CheckMarkIcon />}
            {interest}
          </div>
        ))}
        <div>Choose up to 5 categories!</div>
      </div>
    </>
  );
}
