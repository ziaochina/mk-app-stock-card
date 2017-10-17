import aarGrid from 'mk-aar-grid'

function getGridOption() {
	return {
		'unitGrid': {
			path: 'data.form.units',
			selectFieldName: 'selected',
			colNames: [
				'unit',
				'conversionRate',
				'conversionDesc',
				'isBase',
				'isPu',
				'isSa',
				'isSt'
			],
			colCount: 7,
			cellClassName: 'mk-app-stock-card-cell',
			emptyRow: {}
		},
		'priceGrid': {
			path: 'data.form.prices',
			selectFieldName: 'selected',
			colNames: [
				'unit',
				'lastPuPrice',
				'referPuPrice',
				'lastSaPrice',
				'retailPrice',
				'firstTradePrice',
				'secondTradePrice',
				'thirdTradePrice',
				'fourthTradePrice',
				'fifthTradePrice',
				'sixthTradePrice',
				'servenTradePrice',
				'eighthTradePrice',
				'ninthTradePrice',
				'tenthTradePrice',
			],
			colCount: 15,
			cellClassName: 'mk-app-stock-card-cell',
			emptyRow: {}
		},
		'barcodeGrid': {
			path: 'data.form.barcodes',
			selectFieldName: 'selected',
			colNames: [
				'barcode',
				'unit'
			],
			colCount:2,
			cellClassName: 'mk-app-stock-card-cell',
			emptyRow: {}
		}
	}
}

function actionCreator(option){
    return {
        gridAction: new aarGrid.action({...option, gridOption: getGridOption()})
    }
}

function reducerCreator(option){
    return {
        gridReducer: new aarGrid.reducer({...option, gridOption: getGridOption()})
    }
}

export default {
    actionCreator,
    reducerCreator
}