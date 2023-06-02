import { ServiceDefinition } from '../requests';
export const definitions: ServiceDefinition[] = [
    {
        id: 'get-all-user-friend-requests',
        method: 'GET',
        endpoint: '/friend-request/recieved',
        description: 'Get all friend requests',
        buildRequest: (headers) => ({
            serviceId: 'get-all-user-friend-requests',
            headers
        }),
    },{
        id: 'send-friend-request',
        method: 'POST',
        endpoint: '/friend-request/send',
        description: 'send a friend request',
        buildRequest: (data:any,headers) => ({
            serviceId: 'send-friend-request',
            body: { ...data },
            headers
        }),
    },{
        id: 'get-all-sent-friend-requests',
        method: 'GET',
        endpoint: '/friend-request/sent',
        description: 'get the sent friend request of a connected user ',
        buildRequest: (headers) => ({
            serviceId: 'get-all-sent-friend-requests',
            headers

        }),
    },{
        id: 'accept-a-friend-request',
        method: 'PATCH',
        endpoint: '/friend-request/accept/:requestId',
        description: 'accept a friend request',
        buildRequest: (data:any,headers) => ({
            serviceId: 'accept-a-friend-request',
            urlParams: { ...data },
            headers

        }),
    },{
        id: 'get-a-friend-request',
        method: 'GET',
        endpoint: '/friend-request/findone/:id',
        description: 'get a friend request',
        buildRequest: (data:any,headers) => ({
            serviceId: 'get-a-friend-request',
            UrlParams: { ...data },
            headers

        }),
    },{
        id: 'delete-a-friend-request',
        method: 'DELETE',
        endpoint: '/friend-request/:id',
        description: 'reject a friend request',
        buildRequest: (data:any,headers) => ({
            serviceId: 'delete-a-friend-request',
            UrlParams: { ...data },
            headers

        }),
    },

];
export default definitions;