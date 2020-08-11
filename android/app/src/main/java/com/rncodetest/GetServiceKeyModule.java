package com.rncodetest;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class GetServiceKeyModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  GetServiceKeyModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "GetServiceKey";
  }

  @ReactMethod
  public void getServiceKey(Callback callback) {
    try {
      String service_key = reactContext.getString(R.string.service_key);
      callback.invoke(null, service_key);
    } catch (Exception e) {
      callback.invoke(e.getMessage(), null);
    }
  }
}
