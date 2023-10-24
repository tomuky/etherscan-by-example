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
{/*
            <div className={classes.left_pane_divider}/>

            <NavigationLink to='what-is-defi' title='What is DeFi' icon='question-icon.png'/>
            <NavigationLink to='must-knows' title='The Must-knows' icon='important-icon.png'/>
            <NavigationLink to='get-a-wallet' title='Get a wallet' icon='metamask-logo.svg'/>
            <NavigationLink to='get-coinbase' title='Get Coinbase' icon='coinbase-logo.png'/>
            <NavigationLink to='track-your-portfolio' title='Track your portfolio' icon='zapper-logo.png'/>

            <div className={classes.left_pane_divider}/>

            <NavigationGroup group='polygon' title='Try Polygon' icon='polygon-logo.png'/>
            <NavigationGroup group='optimism' title='Try Optimism' icon='optimism-logo.png'/>
            <NavigationGroup group='ethereum' title='Try Ethereum' icon='ethereum-logo.png'/>

            <div className={classes.left_pane_divider}/>

            <NavigationLink to='redpill' title='Take the red pill' icon='redpill-icon.png'/> */}

            <div className={classes.left_pane_divider}/>

            <NavigationLinkExternal to='https://twitter.com/etherscan_by_ex' title='Follow' icon='twitter-logo.png'/>
            <NavigationLinkExternal to='https://github.com/tomuky/etherscan-by-example' title='Contribute' icon='github-mark-white.png'/>
            {/* <NavigationLinkExternal to='mailto:tom@fastdefitutorial.com' title='Email @tomuky' icon='email-icon.png'/> */}

        </div>
    )
}

export default NavigationList;