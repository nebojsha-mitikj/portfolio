import http from '@/http-common';
import type MessageData from '@/types/MessageData';

class ContactService {

    sendMessage(messageData: MessageData): Promise<any> {
        return http.post('/app/contact.php', messageData);
    }

}

export default new ContactService();