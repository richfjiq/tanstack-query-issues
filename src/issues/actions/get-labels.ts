import { githubApi } from '../../api/github.api';
import { sleep } from '../../helpers';
import { GitHubLabel } from '../interfaces';

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);
  // const response = await fetch('/labels').then((res) => res.json());
  const { data } = await githubApi.get<GitHubLabel[]>('/labels');
  console.log(data);
  return data;
};
