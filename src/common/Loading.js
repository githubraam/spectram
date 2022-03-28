import React from "react";
class Loading extends React.Component{
    render(){
        return(
            <div className="loading" style={loading}>
                <div className="text">LOADING....</div>
            </div>
        )
    }
}

const loading = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.85)',
    color: '#fff',
    fontWeight: 600,
    fontSize: '32px',
    zIndex: 555,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Loading;