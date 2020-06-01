/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/DateProp.php */
export default interface DateProp {
    from: DayMonthYear;
    to: DayMonthYear;
}
interface DayMonthYear {
    day: number | null;
    month: number | null;
    year: number | null;
}
export {};
