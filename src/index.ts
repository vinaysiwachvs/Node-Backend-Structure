import { Request, Response } from 'express';
import createServer from './app';
import CommonVariables from './common/common-variables';

const app = createServer();
const { PORT, NODE_ENV, APP_SERVICE_NAME } = CommonVariables;

app.get('/', (req: Request, res: Response) => {
	res.setHeader('Content-Type', 'application/json');
	const projectName = process.env.PROJECT_NAME || 'Your Project Name';
	const response = {
		message: `Welcome to ${projectName} API`,
		environment: NODE_ENV,
		service: APP_SERVICE_NAME,
	};
	res.json(response);
});

// API Routes

// Error Handler Middleware

app.listen(PORT, () => {
	console.log(`Application is listening on port: ${PORT}, environment: ${NODE_ENV}, service: ${APP_SERVICE_NAME}`);
});
