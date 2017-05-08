package com.shebaoproject;

import android.support.annotation.Nullable;
import android.util.Log;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by ijoy on 17-4-26.
 */
public class IJoyAMapLocationModule extends ReactContextBaseJavaModule implements AMapLocationListener {
    private final AMapLocationClient mLocationClient;
    private final  ReactApplicationContext mReactContext;
    private AMapLocationListener mLocationListener = this; // new AMapLocationListener();
    @Override
    public String getName() {
        return "IJoyAmapLocation";
    }
    private void sendEvent(String eventName,
                           @Nullable WritableMap params) {
        if (mReactContext != null) {
            mReactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, params);
        }
    }
    public IJoyAMapLocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mLocationClient = new AMapLocationClient(reactContext);
      AMapLocationClientOption  mLocationOption = new AMapLocationClientOption();
        mLocationOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Hight_Accuracy);
        mLocationOption.setInterval(2000);
        mLocationClient.setLocationOption(mLocationOption);
        //设置定位回调监听

        this.mLocationClient.setLocationListener(mLocationListener);
        mReactContext = reactContext;
    }
    @ReactMethod
    public void startLocation(){
        this.mLocationClient.startLocation();
    }

    @ReactMethod
    public void stopLocation(){
        this.mLocationClient.stopLocation();

    }

    @Override
    public void onLocationChanged(AMapLocation amapLocation) {
        if (amapLocation != null) {
           sendEvent("mapLocationChanged",amapObjectToObject(amapLocation));
        }
    }

    private WritableMap amapObjectToObject(AMapLocation location){
        WritableMap map=Arguments.createMap();
        if (location.getErrorCode() == 0) {
            //定位成功回调信息，设置相关消息
            location.getLocationType();//获取当前定位结果来源，如网络定位结果，详见定位类型表
            location.getLatitude();//获取纬度
            location.getLongitude();//获取经度
            location.getAccuracy();//获取精度信息
            location.getCity();
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = new Date(location.getTime());
            df.format(date);//定位时间
            map.putString("city",location.getCity());

        } else {
            //显示错误信息ErrCode是错误码，errInfo是错误信息，详见错误码表。
            Log.e("AmapError","location Error, ErrCode:"
                    + location.getErrorCode() + ", errInfo:"
                    + location.getErrorInfo());
        }
        if(map.getString("city")==null) map.putString("city","德阳");
        return map;
    }
}
