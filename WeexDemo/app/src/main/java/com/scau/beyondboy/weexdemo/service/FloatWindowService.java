package com.scau.beyondboy.weexdemo.service;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.support.annotation.Nullable;
import com.scau.beyondboy.weexdemo.view.FloatWindow;
/**
 * @Author: beyondboy
 * @Gmail: guoli.xgl@alibaba-inc.com
 * @Date: 2016-10-26
 * @Time: 15:06
 */
public class FloatWindowService extends Service {
    private FloatWindow mFloatWindow;
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        mFloatWindow=new FloatWindow(this);
        mFloatWindow.show();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if(mFloatWindow!=null){
            mFloatWindow.hide();
        }
    }
}
