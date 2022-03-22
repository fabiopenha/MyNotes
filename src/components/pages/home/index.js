import styles from './Home.module.css';
import presentation from '../../../presentation.png'
const Home = () => {
    return (
        <div className={styles.home_container}>
            <div className={styles.container_primary}>
                <div className={styles.home_content_primary}>
                    <p className={styles.title}>Create notes easily and access 
                    when you wants on the cloud</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's.
                    </p>
                    <br/>   
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's.
                    </p>

                    <div>
                        <button>Register for free now</button>
                    </div>
                </div>
                
            </div>
            <div className={styles.container_secundary}>
                <div className={styles.home_content_secundary}>
                    <img src={presentation} alt="presentation"/>
                </div>
            </div>
        </div>
    )
}

export default Home;