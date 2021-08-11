// 列表数据
var list = [
		{
			"id": 1,
			"title": "奥运会你知道多少",
			"state": 1,
			"stateName": "已发布",
			"time": "2022-07-29",
			"questions": [
				{
					"type": "radio",
					"topic": "2022年哪个城市将举办冬奥会呢",
					"options": ["北京","巴黎","伦敦","雅典"]
				},
				{
					"type": "checkbox",
					"topic": "你喜欢的乒乓球运动员有谁呢",
					"options": ["马龙","许昕","张继科","樊振东"]
				},
				{
					"type": "textarea",
					"topic": "谈谈你对奥运会的看法或者说一下你最喜欢的运动员",
					"isMandatory": false
				}
			]
		},
		{
			"id": 2,
			"title": "党史知多少",
			"state": 0,
			"stateName": "未发布",
			"time": "2022-08-01",
			"questions": [
				{
					"type": "radio",
					"topic": "2021年是中国共产党建党几周年",
					"options": ["99","100","101","102"]
				},
				{
					"type": "checkbox",
					"topic": "被称为中国共产党历史上的两个伟大转折点是",
					"options": ["八七会议","遵义会议","十一届三中全会","九一会议"]
				},
				{
					"type": "textarea",
					"topic": "请你谈谈中国建党100周年的感想",
					"isMandatory": false
				}
			]
		},
		{
			"id": 3,
			"title": "脚下是路 关于毕业我也有自己的方向",
			"state": 2,
			"stateName": "已结束",
			"time": "2022-06-29",
			"questions": [
				{
					"type": "radio",
					"topic": "升大四了，你对大四的规划是什么",
					"options": ["考研","考公","工作","其他"]
				},
				{
					"type": "checkbox",
					"topic": "影响你的规划有哪些因素",
					"options": ["父母的建议","同学朋友的选择","社会发展的趋势","其他"]
				},
				{
					"type": "textarea",
					"topic": "写下你对一年后的自己要说的话",
					"isMandatory": false
				}
			]
		},
	];


var template = {
			radio: {
					"type": "radio",
					"topic": "单选题",
					"options": ["选项1","选项2","选项3","选项4"]
				},
			checkbox: {
					"type": "checkbox",
					"topic": "多选题",
					"options": ["选项1","选项2","选项3","选项4"]
				},
			textarea: {
					"type": "textarea",
					"topic": "文本题",
					"isMandatory": false
				}
		};

var date = function(year, month) {
	// 若未传入参数或参数不完整 即获取当月的数据
	if (year === undefined || month === undefined) {
		let today = new Date();
		year = today.getFullYear();
		month = today.getMonth();
	}

	// 获取该月第一天和该天是礼拜几
	var firstDay = new Date(year, month, 1);
	var firstDayWeekday = firstDay.getDay() || 7;

	// 获取该月最后一天日期和该天是礼拜几
	var lastDay = new Date(year, month+1, 0);
	var lastDate = lastDay.getDate();


	// 获取上个月需显示天数和上月最后一天日期
	var lastDayOfPrevMonth = new Date(year, month, 0);
	var lastDateOfPrevMonth = lastDayOfPrevMonth.getDate();
	var prevMonthDayCount = firstDayWeekday - 1; 	 // 日历起始日为星期日
	// var prevMonthDayCount = firstDayWeekday; // 日历起始日为星期日

	var count = 0;
	var dayArr = [];
	var weekArr = [];

	for (let j = 0; j < 6; j++) {
		for (let i = 0;  i < 7; i++) {
			count++;
			let showDate,
			 	showMonth,
			  	date = count - prevMonthDayCount;

			if (date <= 0) {
				// 上个月
				showDate = lastDateOfPrevMonth + date;
				showMonth = month;
			}
			else if (date > lastDate) {
				// 下个月
				showDate = date - lastDate;
				showMonth = month + 2;
			}
			else {
				showDate = date;
				showMonth = month + 1;
			}

			if (showMonth >= 13) showMonth = 1;
			if (showMonth <= 0) showMonth = 12;

			dayArr.push({
				date: date,
				month: showMonth,
				showDate: showDate
			});
		}
		weekArr.push(dayArr.slice());
		dayArr.length = 0;
	}

	// 重新获取当前年月 以确保数据准确
	year = firstDay.getFullYear();
	month = firstDay.getMonth() + 1;

	// 此处的 flag 是用来判断最后一周是不是全部属于下个月 是则移除最后一周
	var flag = weekArr[5].every( item => item.month !== month);
	if (flag) {
		weekArr.pop();
	}

	return {
		year: year,
		month: month,
		weeks: weekArr
	};
};


export default {
	list,
	date,
	template
}

