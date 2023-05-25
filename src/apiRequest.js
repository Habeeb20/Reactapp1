const apiRequest = async (url = '', OptionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, OptionsObj);
        if(response.ok) throw Error('please reload the app')

    }catch (Error) {
        errMsg = Error.msg

    }finally {
        return Error.Msg

    }

}

export default  apiRequest;