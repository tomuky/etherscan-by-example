import { useEffect } from 'react';
import classes from '../style/Navigation.module.css'
import NavigationGroup from './NavigationGroup';
import NavigationLink from './NavigationLink';
import NavigationLinkExternal from './NavigationLinkExternal';

const NavigationList = (props) => {

    useEffect(() => props.scrollHander(),[props]);

    return (
        <div id='left_pane_scroll' className={classes.left_pane_scroll}>

            <NavigationLink to='welcome' title='Hello' icon='smart-contract-icon.png'/>
            <NavigationLink to='what' title='What is Etherscan' icon='etherscan-logo.png'/>

            <div className={classes.left_pane_divider}/>

            <NavigationLink to='check-address' title='Check address' icon='wallet-icon.png'/>

            <div className={classes.left_pane_divider}/>

            <NavigationLinkExternal to='https://twitter.com/etherscan_by_ex' title='Follow' icon='twitter-logo.png'/>
            <NavigationLinkExternal to='https://github.com/tomuky/etherscan-by-example' title='Contribute' icon='github-mark-white.png'/>
            {/* <NavigationLinkExternal to='mailto:tom@fastdefitutorial.com' title='Email @tomuky' icon='email-icon.png'/> */}

        </div>
    )
}

export default NavigationList;