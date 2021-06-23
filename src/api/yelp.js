import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3c1CfKDZL2HzACBpQ_kVr53vQiur4m5h5HVwpWTzGmG92kiVYGmt1LPGf5NyoMiFCD1AeoeQZQYmiRIdK3Esw0AAOiyVMkO0NNIxG50xfOkMrtw98aJjCebZyOMgYHYx'
    }
})