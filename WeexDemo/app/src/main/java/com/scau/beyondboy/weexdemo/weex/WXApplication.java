package com.scau.beyondboy.weexdemo.weex;

import android.app.Application;
import com.scau.beyondboy.weexdemo.weex.adapter.ImageAdapter;
import com.scau.beyondboy.weexdemo.weex.module.ShowFtWdModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
/**
 * @Author: beyondboy
 * @Gmail: guoli.xgl@alibaba-inc.com
 * @Date: 2016-10-25
 * @Time: 18:03
 */
public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this,config);
        try {
            WXSDKEngine.registerModule("floatwindow", ShowFtWdModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
