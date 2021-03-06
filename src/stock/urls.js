import { K_TYPE } from './cons';

export function priceUrl(ktype, symbol) {
  const _ktype = K_TYPE[ktype] ? K_TYPE[ktype] : K_TYPE.minute;
  const type = _ktype === K_TYPE.minute ? ktype : 'last';
  return `http://api.finance.ifeng.com/${_ktype}/?code=${symbol}&type=${type}`;
}

export function tickUrl(date, symbol) {
  const url = `http://market.finance.sina.com.cn/downxls.php?date=${date}&symbol=${symbol}`;
  return url;
}

export function todayAllUrl(pageSize, pageNo) {
  const url = `http://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?num=${pageSize}&sort=changepercent&asc=0&node=hs_a&symbol=&_s_r_a=page&page=${pageNo}`;
  return url;
}

export function liveDataUrl(symbols) {
  const url = `http://hq.sinajs.cn/list=${symbols.join(',')}`;
  return url;
}

export function todayTickUrl(code, end = '15:00:00') {
  const url = `http://quotes.money.163.com/service/zhubi_ajax.html?symbol=${code}&end=${end}`;
  return url;
}

export function indexUrl() {
  const url = `http://hq.sinajs.cn/rn=xppzh&list=sh000001,sh000002,sh000003,sh000008,sh000009,sh000010,sh000011,sh000012,sh000016,sh000017,sh000300,sz399001,sz399002,sz399003,sz399004,sz399005,sz399006,sz399100,sz399101,sz399106,sz399107,sz399108,sz399333,sz399606`;
  return url;
}

export function sinaDDUrl(symbol, volume, date) {
  const url = `http://vip.stock.finance.sina.com.cn/quotes_service/view/cn_bill_download.php?symbol=${symbol}&num=60&page=1&sort=ticktime&asc=0&volume=${volume}&amount=0&type=0&day=${date}`;
  return url;
}

export function sinaIndustryIndexUrl() {
  const url = `http://vip.stock.finance.sina.com.cn/q/view/newSinaHy.php`;
  return url;
}

export function sinaClassifyDetailUrl(tag) {
  const url = `http://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page=1&num=400&sort=symbol&asc=1&node=${tag}&symbol=&_s_r_a=page`;
  return url;
}

export function sinaConceptsIndexUrl() {
  const url = `http://money.finance.sina.com.cn/q/view/newFLJK.php?param=class`;
  return url;
}

export function allStockUrl() {
  const url = `http://218.244.146.57/static/all.csv`;
  return url;
}

export function hs300Url(pageNo = 1, pageSize = 300) {
  const url = `http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["jjhq",${pageNo},${pageSize},"",0,"hs300"]]`;
  return url;
}

export function sz50Url(pageNo = 1, pageSize = 50) {
  const url = `http://money.finance.sina.com.cn/d/api/openapi_proxy.php/?__s=[["jjhq",${pageNo},${pageSize},"",0,"zhishu_000016"]]`;
  return url;
}

export function lhbUrl(start, end, pageNo = 1, pageSize = 150) {
  const url = `http://quotes.money.163.com/hs/marketdata/service/lhb.php?page=${pageNo - 1}&query=start:${start};end:${end}&sort=TDATE&order=desc&count=${pageSize}`;
  return url;
}

export function blockTradeUrl(start, end, pageNo = 1, pageSize = 150) {
  const url = `http://quotes.money.163.com/hs/marketdata/service/dzjy.php?page=${pageNo - 1}&query=start:${start};end:${end};&order=desc&count=${pageSize}&sort=PUBLISHDATE`;
  return url;
}

export function longPeriodRankUrl(period = 'month', pageNo = 1, pageSize = 100) {
  let rankBy = '';
  switch(period) {
    case 'week':
      rankBy = 'WEEK_PERCENT';
    case 'month':
      rankBy = 'MONTH_PERCENT';
    case 'quarter':
      rankBy = 'QUARTER_PERCENT';
    case 'year':
      rankBy = 'YEAR_PERCENT';
    default:
      rankBy = 'PERCENT';
  }
  const url = `http://quotes.money.163.com/hs/realtimedata/service/rank.php?page=${pageNo - 1}&query=LONG_PERIOD_RANK:_exists_&fields=RN,CODE,SYMBOL,NAME,PRICE,LONG_PERIOD_RANK,PERCENT&sort=LONG_PERIOD_RANK.${rankBy}&order=desc&count=${pageSize}`;
  return url;
}
