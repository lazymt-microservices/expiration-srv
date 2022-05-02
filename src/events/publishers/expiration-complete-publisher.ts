import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@lazymtlib/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
