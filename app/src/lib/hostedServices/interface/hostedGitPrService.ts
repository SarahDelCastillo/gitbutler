import { buildContextStore } from '$lib/utils/context';
import type { DetailedPullRequest, MergeMethod, PullRequest } from './types';
import type { Writable } from 'svelte/store';

export const [getHostedGitPrServiceStore, createHostedGitPrServiceStore] = buildContextStore<
	HostedGitPrService | undefined
>('gitBranchService');

export interface HostedGitPrService {
	loading: Writable<boolean>;
	get(prNumber: number): Promise<DetailedPullRequest>;
	createPr(title: string, body: string, draft: boolean): Promise<PullRequest | undefined>;
	merge(method: MergeMethod, prNumber: number): Promise<void>;
}
