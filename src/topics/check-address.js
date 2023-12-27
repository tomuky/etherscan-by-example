import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const CheckAddress = () => {
    return (
        <>
            <TopicTitle title="Check address" icon="wallet-icon.png"/>
            <TopicDescription>
                <p>Check on what an address is holding and doing</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink to='https://etherscan.io/' title='etherscan.io' icon='etherscan-logo.png'/> and find the search field</Step>
                <Step n='2'>Paste in the address in the search field and hit enter</Step>
                <Step n='3'>This brings up the address page for a particular address</Step>
                <Step n='4'>Some areas to take note of:</Step>
                <Step type='indent'>ETH Balance and Token Holdings near the left side of page</Step>
                <Step type='indent'>A detailed list of transactions</Step>
                <Step type='indent'>Toggle to show Token Transfers in the list view</Step>
                <Step type='indent'>Analytics view</Step>
                <Step type='indent'>Multichain view of other Ethereum-like blockchains</Step>
            </TopicBody>
        </>
    )
}

export default CheckAddress;