export interface Quizz{
  _id?: string;
  team: string;
  title: string;
  description: string;
  level: string;
  rewardXp: string;
  type: string;
  options: Array<Object>;
}
