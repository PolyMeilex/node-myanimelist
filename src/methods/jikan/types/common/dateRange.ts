import { DateProp } from "./";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/DateRange.php */
export interface DateRange {
  from: Date | null;
  to: Date | null;
  prop: DateProp;
  string: string;
}
