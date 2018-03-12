type InboxGroup = "primary" | "social" | "promotions";
type InboxType = "draft" | "sent" | "spam" | "trash" | "none";

export class Mail {
  from: {
    name: string;
    mail: string;
  };
  subject: string;
  content: string;
  when: string;
  read: boolean;
  starred: boolean;
  labels: {
    name: string;
    color: string;
  };
  group: InboxGroup;
  type: InboxType;
  attachments: string[];

  constructor(model: any = null) {
    this.from = model.from;
    this.subject = model.subject;
    this.content = model.content;
    this.when = model.when;
    this.read = model.read;
    this.starred = model.starred;
    this.labels = model.labels;
    this.group = model.group;
    this.type = model.type;
    this.attachments = model.attachments;
  }
}
