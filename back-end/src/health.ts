import { APIGatewayEvent } from 'aws-lambda';

export async function handle(event: APIGatewayEvent) {
    return {
        statusCode: 204,
    };
}
