import DateProp from "./dateProp";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/DateRange.php */
export default interface DateRange {
  from: Date | null;
  to: Date | null;
  prop: DateProp;
  string: string;
}
