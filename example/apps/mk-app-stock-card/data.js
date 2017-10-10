export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-stock-card',
		children: [{
			name: 'header',
			component: 'Layout',
			className: 'mk-app-stock-card-header',
			children: [{
				name: 'left',
				component: 'Layout',
				className: 'mk-app-stock-card-header-left',
				children: [{
					name: 'page',
					component: 'Button.Group',
					children: [{
						name: 'prev',
						component: 'Button',
						type: 'softly',
						size: 'small',
						icon: 'left',
						onClick: '{{$prev}}'
					}, {
						name: 'next',
						component: 'Button',
						type: 'softly',
						size: 'small',
						icon: 'right',
						onClick: '{{$next}}'
					}]
				}]
			}, {
				name: 'right',
				component: 'Layout',
				className: 'mk-app-stock-card-header-right',
				children: [{
					name: 'save',
					component: 'Button',
					type: 'showy',
					onClick: '{{$save}}',
					children: '保存'
				}, {
					name: 'add',
					component: 'Button',
					type: 'softly',
					children: '新增'
				}, {
					name: 'del',
					component: 'Button',
					type: 'softly',
					disabled: '{{!(!!data.form.id || data.form.id == 0)}}',
					children: '删除'
				}]
			}]
		}, {
			name: 'tabs',
			component: 'Tabs',
			className: 'mk-app-stock-card-tabs',
			type: 'card',
			activeKey: '{{data.other.tabKey}}',
			onChange: '{{$tabChange}}',
			children: [{
				name: 'base',
				component: 'Tabs.TabPane',
				key: 'base',
				tab: '基本信息'
			}, {
				name: 'stock',
				component: 'Tabs.TabPane',
				key: 'stock',
				tab: '库存'
			}, {
				name: 'barcode',
				component: 'Tabs.TabPane',
				key: 'barcode',
				tab: '条码'
			}]
		}, {
			name: 'base',
			component: 'Layout',
			className: 'mk-app-stock-card-base',
			_visible: "{{data.other.tabKey=='base'}}",
			children: [{
				name: 'zone1',
				component: 'Layout',
				className: 'mk-app-stock-card-base-zone1',
				children: [{
					name: 'left',
					component: 'Form',
					className: 'mk-app-stock-card-base-zone1-left',
					children: [{
						name: 'codeItem',
						component: 'Form.Item',
						label: '存货编码',
						required: true,
						children: [{
							name: 'code',
							component: 'Input',
							value: '{{data.form.code}}',
							onChange: "{{(e)=>$sf('data.form.code',e.target.value)}}",
						}]
					}, {
						name: 'nameItem',
						component: 'Form.Item',
						label: '存货名称',
						required: true,
						children: [{
							name: 'name',
							component: 'Input',
							value: '{{data.form.name}}',
							onChange: "{{(e)=>$sf('data.form.name',e.target.value)}}",
						}]
					}, {
						name: 'typeItem',
						component: 'Form.Item',
						label: '存货类型',
						required: true,
						children: [{
							name: 'type',
							component: 'Select',
							showSearch: false,
							value: '{{data.form.type && data.form.type.id }}',
							onChange: "{{$typeChange}}",
							onFocus: "{{$typeFocus}}",
							children: {
								name: 'option',
								component: 'Select.Option',
								value: "{{ data.other.typeDataSource && data.other.typeDataSource[_rowIndex].id }}",
								children: '{{data.other.typeDataSource && data.other.typeDataSource[_rowIndex].name }}',
								_power: 'for in data.other.typeDataSource'
							},
							dropdownFooter: {
								name: 'add',
								component: 'Button',
								type: 'primary',
								style: { width: '100%' },
								children: '新增',
								onClick: '{{$addType}}'
							},
						}]
					}, {
						name: 'specItem',
						component: 'Form.Item',
						label: '规格型号',
						children: [{
							name: 'spec',
							component: 'Input',
							value: '{{data.form.spec}}',
							onChange: "{{(e)=>$sf('data.form.spec',e.target.value)}}",
						}]
					}, {
						name: 'pricingModeItem',
						component: 'Form.Item',
						label: '计价方式',
						children: [{
							name: 'pricingMode',
							component: 'Select',
							showSearch: false,
							value: '{{data.form.pricingMode && data.form.pricingMode.id }}',
							onChange: "{{$pricingModeChange}}",
							onFocus: "{{$pricingModeFocus}}",
							children: {
								name: 'option',
								component: 'Select.Option',
								value: "{{ data.other.pricingModeDataSource && data.other.pricingModeDataSource[_rowIndex].id }}",
								children: '{{data.other.pricingModeDataSource && data.other.pricingModeDataSource[_rowIndex].name }}',
								_power: 'for in data.other.pricingModeDataSource'
							},
							dropdownFooter: {
								name: 'add',
								component: 'Button',
								type: 'primary',
								style: { width: '100%' },
								children: '新增',
								onClick: '{{$addPricingMode}}'
							},
						}]
					}, {
						name: 'classItem',
						component: 'Form.Item',
						label: '存货分类',
						required: true,
						children: [{
							name: 'class',
							component: 'Select',
							showSearch: false,
							value: '{{data.form.class && data.form.class.id }}',
							onChange: "{{$classChange}}",
							onFocus: "{{$classFocus}}",
							children: {
								name: 'option',
								component: 'Select.Option',
								value: "{{ data.other.classDataSource && data.other.classDataSource[_rowIndex].id }}",
								children: '{{data.other.classDataSource && data.other.classDataSource[_rowIndex].name }}',
								_power: 'for in data.other.classDataSource'
							},
							dropdownFooter: {
								name: 'add',
								component: 'Button',
								type: 'primary',
								style: { width: '100%' },
								children: '新增',
								onClick: '{{$addClass}}'
							},
						}]
					}, {
						name: 'taxRateItem',
						component: 'Form.Item',
						label: '税率',
						required: true,
						children: [{
							name: 'taxRate',
							component: 'Select',
							showSearch: false,
							value: '{{data.form.taxRate && data.form.taxRate.id }}',
							onChange: "{{$taxRateChange}}",
							onFocus: "{{$taxRateFocus}}",
							children: {
								name: 'option',
								component: 'Select.Option',
								value: "{{ data.other.taxRateDataSource && data.other.taxRateDataSource[_rowIndex].id }}",
								children: '{{data.other.taxRateDataSource && data.other.taxRateDataSource[_rowIndex].name }}',
								_power: 'for in data.other.taxRateDataSource'
							},
							dropdownFooter: {
								name: 'add',
								component: 'Button',
								type: 'primary',
								style: { width: '100%' },
								children: '新增',
								onClick: '{{$addTaxRate}}'
							},
						}]
					}, {
						name: 'meaUnitItem',
						component: 'Form.Item',
						label: '计量单位',
						required: true,
						children: [{
							name: 'meaUnit',
							component: 'Select',
							showSearch: false,
							value: '{{data.form.meaUnit && data.form.meaUnit.id }}',
							onChange: "{{$meaUnitChange}}",
							onFocus: "{{$meaUnitFocus}}",
							children: {
								name: 'option',
								component: 'Select.Option',
								value: "{{ data.other.meaUnitDataSource && data.other.meaUnitDataSource[_rowIndex].id }}",
								children: '{{data.other.meaUnitDataSource && data.other.meaUnitDataSource[_rowIndex].name }}',
								_power: 'for in data.other.meaUnitDataSource'
							},
							dropdownFooter: {
								name: 'add',
								component: 'Button',
								type: 'primary',
								style: { width: '100%' },
								children: '新增',
								onClick: '{{$addMeaUnit}}'
							},
						}]
					}, {
						name: 'multiMeaItem',
						component: 'Form.Item',
						className: 'mk-app-stock-card-base-zone1-left-checkbox',
						label: '多计量',
						children: [{
							name: 'multiMea',
							component: 'Checkbox',
							checked: '{{data.form.multiMea}}',
							onChange: "{{(e)=>$sf('data.form.multiMea',e.target.checked)}}",
						}]
					}, {
						name: 'disableItem',
						component: 'Form.Item',
						className: 'mk-app-stock-card-base-zone1-left-checkbox',
						label: '停用',
						children: [{
							name: 'disable',
							component: 'Checkbox',
							checked: '{{data.form.disable}}',
							onChange: "{{(e)=>$sf('data.form.disable',e.target.checked)}}",
						}]
					}]
				}, {
					name: 'right',
					component: 'Layout',
					className: 'mk-app-stock-card-base-zone1-right',
					children: [{
						name: 'left',
						component: 'Layout',
						children: [{
							name: 'imgs',
							component: 'Carousel',
							children: [{
								name: 'a',
								component: '::div',
								children: 'a'
							}, {
								name: 'b',
								component: '::div',
								children: 'b'

							}]
						}]
					}, {

						name: 'right',
						component: 'Layout',
						className: 'mk-app-stock-card-base-zone1-right-right',
						children: [{
							component: 'Button',
							type: "softly",
							shape: "circle",
							icon: 'plus',
							onClick: '{{$addType}}'
						}, {
							component: 'Button',
							type: "softly",
							shape: "circle",
							icon: 'close',
							onClick: '{{$addType}}'
						}]


					}]
				}]

			}, {
				name: 'splitter1',
				component: '::h3',
				className: 'mk-app-stock-card-base-splitter1',
				children: '计量单位'
			}, {
				name: 'zone2',
				component: 'Layout',
				className: 'mk-app-stock-card-base-zone2',
				children: [{
					name: 'dataGrid',
					component: 'DataGrid',
					className: 'mk-app-stock-card-base-zone2-purchase-grid',
					headerHeight: 35,
					rowHeight: 35,
					rowsCount: 5,
					columns: [{
						name: 'unit',
						component: 'DataGrid.Column',
						columnKey: 'unit',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '单位'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'conversionRate',
						component: 'DataGrid.Column',
						columnKey: 'conversionRate',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '换算率'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'conversionDesc',
						component: 'DataGrid.Column',
						columnKey: 'conversionDesc',
						flexGrow: 1,
						width: 200,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '换算说明'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'isBase',
						component: 'DataGrid.Column',
						columnKey: 'isBase',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '是基本计量单位'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'isPu',
						component: 'DataGrid.Column',
						columnKey: 'isPu',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '是采购常用单位'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'isSa',
						component: 'DataGrid.Column',
						columnKey: 'isSa',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '是采购常用单位'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'isSt',
						component: 'DataGrid.Column',
						columnKey: 'isSt',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '是库存常用单位'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}]
				}]

			}, {
				name: 'splitter2',
				component: '::h3',
				className: 'mk-app-stock-card-base-splitter2',
				children: '价格信息'
			}, {
				name: 'zone3',
				component: 'Layout',
				className: 'mk-app-stock-card-base-zone3',
				children: [{
					name: 'dataGrid',
					component: 'DataGrid',
					className: 'mk-app-stock-card-base-zone3-sale-grid',
					headerHeight: 35,
					rowHeight: 35,
					rowsCount: 5,
					columns: [{
						name: 'unit',
						component: 'DataGrid.Column',
						columnKey: 'unit',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '单位'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'lastPuPrice',
						component: 'DataGrid.Column',
						columnKey: 'lastPuPrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '最近进价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'referPuPrice',
						component: 'DataGrid.Column',
						columnKey: 'lastPuPrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '参考进价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'lastSaPrice',
						component: 'DataGrid.Column',
						columnKey: 'lastSaPrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '最近售价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'retailPrice',
						component: 'DataGrid.Column',
						columnKey: 'retailPrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '零售价格'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'firstTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'firstTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '一级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'secondTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'secondTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '二级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'thirdTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'thirdTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '三级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'fourthTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'fourthTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '四级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'fifthTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'fifthTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '五级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'sixthTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'sixthTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '六级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'servenTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'servenTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '七级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'eighthTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'eighthTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '八级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'ninthTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'ninthTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '九级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}, {
						name: 'tenthTradePrice',
						component: 'DataGrid.Column',
						columnKey: 'tenthTradePrice',
						width: 100,
						header: {
							name: 'header',
							component: 'DataGrid.Cell',
							children: '十级批发价'
						},
						cell: {
							name: 'cell',
							component: 'DataGrid.Cell',
							_power: '({rowIndex})=>rowIndex',
							children: 'aaa',
						},
					}]
				}]
			}, {
				name: 'splitter3',
				component: '::h3',
				className: 'mk-app-stock-card-base-splitter2',
				children: '备注'
			}, {
				name: 'zone4',
				component: 'Layout',
				className: 'mk-app-stock-card-base-zone4',
				children: {
					name: 'memo',
					component: 'Input.TextArea',
					autosize: { minRows: 4, maxRows: 10 }
				}
			}]
		}, {
			name: 'base',
			component: 'Form',
			className: 'mk-app-stock-card-stock',
			_visible: "{{data.other.tabKey=='stock'}}",
			children: [{
				name: 'referCostItem',
				component: 'Form.Item',
				label: '参考成本',
				required: true,
				children: [{
					name: 'referCost',
					component: 'Input',
					value: '{{data.form.name}}',
					onChange: "{{(e)=>$sf('data.form.name',e.target.value)}}",
				}]
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			form: {
				code: '',
				name: ''
			},
			other: {
				tabKey: 'base'
			}
		}
	}
}