declare type TApiResponseData = Response & {
	data?: any;
	error: boolean;
	errorMsg: string | null;
};
