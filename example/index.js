import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import mk_app_mea_unit_card_test from './apps/apps/mk-app-mea-unit-card/apps/mk-app-mea-unit-card-test/index.js'
import mk_app_mea_unit_card from './apps/apps/mk-app-mea-unit-card/index.js'
import mk_app_stock_card from './apps/mk-app-stock-card/index.js'

const apps = {
		
	[mk_app_mea_unit_card_test.name]: mk_app_mea_unit_card_test,	
	[mk_app_mea_unit_card.name]: mk_app_mea_unit_card,	
	[mk_app_stock_card.name]: mk_app_stock_card,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()