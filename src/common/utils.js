import moment from 'moment'
import timeago from 'timeago.js'
/**
 * [fmtDate]
 * @param  {[type]} date [description]
 * @param  {[type]} fmt  [description]
 * @return {[type]}      [description]
 */
const fmtDate = (date, fmt) => {
  return moment(date).format(fmt)
}
/**
 * [timeAgo ]
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
const timeAgo = (date) => {
  return timeago().format(date, 'zh_CN')
}

export default {fmtDate, timeAgo}
