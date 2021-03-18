import {PredictHQResult} from '../consts/types';

export class UpcomingEvent {
  title: string;
  id: string;
  labels: string[];
  startDate: Date;

  constructor(result: PredictHQResult) {
    this.id = result.id;
    this.title = result.title;
    this.labels = result.labels;
    this.startDate = new Date(result.start);
  }
}
