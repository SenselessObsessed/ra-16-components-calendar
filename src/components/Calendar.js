import PropTypes from 'prop-types';
import CalendarModel from '../models/CalendarModel';

function Calendar({ date }) {
	const dayNum = date.getDate();
	const dayStr = date.toLocaleDateString('ru-RU', { weekday: 'long' });
	const monthI = date.toLocaleDateString('ru-RU', { month: 'long' });
	const monthUnformatted = date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
	});
	const monthFormatted = monthUnformatted.split(' ')[1];
	const year = date.toLocaleDateString('ru-RU', { year: 'numeric' });

	const firstDayMonth =
		Number(date) - 1000 * 60 * 60 * 24 * (date.getDate() - 1);

	const renderDates = [[], [], [], [], [], []];
	let startDate;
	if (!new Date(firstDayMonth).getDay()) {
		startDate = Number(date) - 1000 * 60 * 60 * 24 * 7;
	} else {
		startDate =
			Number(firstDayMonth) -
			1000 * 60 * 60 * 24 * (new Date(firstDayMonth).getDay() - 1);
	}

	for (let i = 0; i < 7 * 6; i++) {
		let currDay, otherDay;
		if (new Date(startDate).getMonth() !== date.getMonth()) {
			otherDay = true;
		} else {
			otherDay = false;
		}

		if (
			new Date(startDate).getDate() === date.getDate() &&
			new Date(startDate).getMonth() === date.getMonth()
		) {
			currDay = true;
		} else {
			currDay = false;
		}

		if (i >= 35) {
			renderDates[5].push({
				day: new Date(startDate).getDate(),
				otherDay,
				currDay,
			});
		} else if (i >= 28) {
			renderDates[4].push({
				day: new Date(startDate).getDate(),
				otherDay,
				currDay,
			});
		} else if (i >= 21) {
			renderDates[3].push({
				day: new Date(startDate).getDate(),
				otherDay,
				currDay,
			});
		} else if (i >= 14) {
			renderDates[2].push({
				day: new Date(startDate).getDate(),
				otherDay,
				currDay,
			});
		} else if (i >= 7) {
			renderDates[1].push({
				day: new Date(startDate).getDate(),
				otherDay,
				currDay,
			});
		} else {
			renderDates[0].push({
				day: new Date(startDate).getDate(),
				otherDay,
				currDay,
			});
		}

		startDate += 1000 * 60 * 60 * 24;
	}

	return (
		<div className='ui-datepicker'>
			<div className='ui-datepicker-material-header'>
				<div className='ui-datepicker-material-day'>
					{dayStr.replace(dayStr[0], dayStr[0].toUpperCase())}
				</div>
				<div className='ui-datepicker-material-date'>
					<div className='ui-datepicker-material-day-num'>{dayNum}</div>
					<div className='ui-datepicker-material-month'>{monthFormatted}</div>
					<div className='ui-datepicker-material-year'>{year}</div>
				</div>
			</div>
			<div className='ui-datepicker-header'>
				<div className='ui-datepicker-title'>
					<span className='ui-datepicker-month'>
						{monthI.replace(monthI[0], monthI[0].toUpperCase())}
					</span>
					&nbsp;
					<span className='ui-datepicker-year'>{2017}</span>
				</div>
			</div>
			<table className='ui-datepicker-calendar'>
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className='ui-datepicker-week-end' />
					<col className='ui-datepicker-week-end' />
				</colgroup>
				<thead>
					<tr>
						<th scope='col' title='Понедельник'>
							Пн
						</th>
						<th scope='col' title='Вторник'>
							Вт
						</th>
						<th scope='col' title='Среда'>
							Ср
						</th>
						<th scope='col' title='Четверг'>
							Чт
						</th>
						<th scope='col' title='Пятница'>
							Пт
						</th>
						<th scope='col' title='Суббота'>
							Сб
						</th>
						<th scope='col' title='Воскресенье'>
							Вс
						</th>
					</tr>
				</thead>
				<tbody>
					{renderDates.map((date, idx) => {
						return (
							<tr key={idx}>
								<td
									className={
										date[0].otherDay
											? 'ui-datepicker-other-month'
											: date[0].currDay
											? 'ui-datepicker-today'
											: null
									}
									key={date[0].day}
								>
									{date[0].day}
								</td>
								<td
									className={
										date[1].otherDay
											? 'ui-datepicker-other-month'
											: date[1].currDay
											? 'ui-datepicker-today'
											: null
									}
									key={date[1].day}
								>
									{date[1].day}
								</td>
								<td
									className={
										date[2].otherDay
											? 'ui-datepicker-other-month'
											: date[2].currDay
											? 'ui-datepicker-today'
											: null
									}
									key={date[2].day}
								>
									{date[2].day}
								</td>
								<td
									className={
										date[3].otherDay
											? 'ui-datepicker-other-month'
											: date[3].currDay
											? 'ui-datepicker-today'
											: null
									}
									key={date[3].day}
								>
									{date[3].day}
								</td>
								<td
									className={
										date[4].otherDay
											? 'ui-datepicker-other-month'
											: date[4].currDay
											? 'ui-datepicker-today'
											: null
									}
									key={date[4].day}
								>
									{date[4].day}
								</td>
								<td
									className={
										date[5].otherDay
											? 'ui-datepicker-other-month'
											: date[5].currDay
											? 'ui-datepicker-today'
											: null
									}
									key={date[5].day}
								>
									{date[5].day}
								</td>
								<td
									className={
										date[6].otherDay
											? 'ui-datepicker-other-month'
											: date[6].currDay
											? 'ui-datepicker-today'
											: null
									}
									key={date[6].day}
								>
									{date[6].day}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

Calendar.propTypes = {
	date: PropTypes.instanceOf(CalendarModel).isRequired,
};

export default Calendar;
