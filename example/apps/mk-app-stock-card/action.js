import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
        this.config = config.current
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
    }

    prev = () => {

    }

    next = () => {

    }

    save = () => {

    }

    tabChange = (key) => {
        this.metaAction.sf('data.other.tabKey', key)
    }

    typeChange = (v) => {
        const ds = this.metaAction.gf('data.other.typeDataSource')
        const hit = ds.find(o => o.get('id') == v)
        this.metaAction.sf(`data.form.type`, hit)
    }

    typeFocus = async () => {
        //const response = await this.webapi.education.query()
        //this.metaAction.sf('data.other.educationDataSource', fromJS(response))
    }


    addType = async () => {
        /*
        const ret = await this.metaAction.modal('show', {
            title: '新增存货类型',
            children: this.metaAction.loadApp('mk-app-voucher-education', {
                store: this.component.props.store,
            })
        })

        if (ret) {
            const response = await this.webapi.education.query()
            this.metaAction.sfs({
                'data.other.educationDataSource': fromJS(response),
                'data.form.education': fromJS(ret)
            })
        }
        */
    }



    pricingModeChange = (v) => {
        const ds = this.metaAction.gf('data.other.typeDataSource')
        const hit = ds.find(o => o.get('id') == v)
        this.metaAction.sf(`data.form.type`, hit)
    }

    pricingModeFocus = async () => {
        //const response = await this.webapi.education.query()
        //this.metaAction.sf('data.other.educationDataSource', fromJS(response))
    }


    addPricingMode = async () => {
        /*
        const ret = await this.metaAction.modal('show', {
            title: '新增存货类型',
            children: this.metaAction.loadApp('mk-app-voucher-education', {
                store: this.component.props.store,
            })
        })

        if (ret) {
            const response = await this.webapi.education.query()
            this.metaAction.sfs({
                'data.other.educationDataSource': fromJS(response),
                'data.form.education': fromJS(ret)
            })
        }
        */
    }

    classChange = (v) => {
        const ds = this.metaAction.gf('data.other.typeDataSource')
        const hit = ds.find(o => o.get('id') == v)
        this.metaAction.sf(`data.form.type`, hit)
    }

    classFocus = async () => {
        //const response = await this.webapi.education.query()
        //this.metaAction.sf('data.other.educationDataSource', fromJS(response))
    }


    addClass = async () => {
        /*
        const ret = await this.metaAction.modal('show', {
            title: '新增存货类型',
            children: this.metaAction.loadApp('mk-app-voucher-education', {
                store: this.component.props.store,
            })
        })

        if (ret) {
            const response = await this.webapi.education.query()
            this.metaAction.sfs({
                'data.other.educationDataSource': fromJS(response),
                'data.form.education': fromJS(ret)
            })
        }
        */
    }

    taxRateChange = (v) => {
        const ds = this.metaAction.gf('data.other.typeDataSource')
        const hit = ds.find(o => o.get('id') == v)
        this.metaAction.sf(`data.form.type`, hit)
    }

    taxRateFocus = async () => {
        //const response = await this.webapi.education.query()
        //this.metaAction.sf('data.other.educationDataSource', fromJS(response))
    }


    addTaxRate = async () => {
        /*
        const ret = await this.metaAction.modal('show', {
            title: '新增存货类型',
            children: this.metaAction.loadApp('mk-app-voucher-education', {
                store: this.component.props.store,
            })
        })

        if (ret) {
            const response = await this.webapi.education.query()
            this.metaAction.sfs({
                'data.other.educationDataSource': fromJS(response),
                'data.form.education': fromJS(ret)
            })
        }
        */
    }

    meaUnitChange = (v) => {
        const ds = this.metaAction.gf('data.other.typeDataSource')
        const hit = ds.find(o => o.get('id') == v)
        this.metaAction.sf(`data.form.type`, hit)
    }

    meaUnitFocus = async () => {
        //const response = await this.webapi.education.query()
        //this.metaAction.sf('data.other.educationDataSource', fromJS(response))
    }


    addMeaUnit = async () => {
        /*
        const ret = await this.metaAction.modal('show', {
            title: '新增存货类型',
            children: this.metaAction.loadApp('mk-app-voucher-education', {
                store: this.component.props.store,
            })
        })

        if (ret) {
            const response = await this.webapi.education.query()
            this.metaAction.sfs({
                'data.other.educationDataSource': fromJS(response),
                'data.form.education': fromJS(ret)
            })
        }
        */
    }

}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}