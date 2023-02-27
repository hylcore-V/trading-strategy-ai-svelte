import type { PageLoad } from './$types';
import { fetchPublicApi } from '$lib/helpers/public-api';

export const load = (async ({ params, fetch, setHeaders }) => {
	const chain_slug = params.chain;
	const exchange_slug = params.exchange;
	const pair_slug = params.pair;

	// Cache the pair data pages for 30 minutes at the Cloudflare edge so the
	// pages are served really fast if they get popular, and also for speed test
	setHeaders({
		'cache-control': 'public, max-age=1800' // 30 minutes: 30 * 60 = 1800
	});

	return fetchPublicApi(fetch, 'pair-details', { exchange_slug, chain_slug, pair_slug });
}) satisfies PageLoad;
