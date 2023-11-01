// analytics
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

interface UrlProps {
	pathname: string;
}

export const load = async ({ url }: { url: UrlProps }) => {
	return {
		url: url.pathname
	};
};
