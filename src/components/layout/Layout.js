import { Component } from 'react';

const styles = {
    layout: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        width: '100%',
    }
}

class Layout extends Component {
    render() {
        return (
            <div className="layout" style={styles.layout}>
                <div className="container" style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;