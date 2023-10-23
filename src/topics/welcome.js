import ExternalLink from '../components/ExternalLink';
import InternalLink from '../components/InternalLink';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const Welcome = () => {
    return (
        <>
            <TopicTitle title="Hello" icon="smart-contract-icon.png"/>
            <div className={classes.description}>
                <p>Learn Etherscan with examples</p>
                <p>Rely less on frontends</p>
                {/* <p><InternalLink title='Start here' to='/first' icon='first-logo.png'/></p> */}
                
                <p>Coming soon...</p>
            </div>
        </>
    )
}

export default Welcome;