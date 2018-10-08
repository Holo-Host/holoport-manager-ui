import mock from './mock';
import './analytics-dashboard-db';
import './faq-db';
import './knowledge-base-db';
import './chat-db';
import './sys-db';
import './users-db';
mock.onAny().passThrough();