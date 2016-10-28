package com.scau.beyondboy.weexdemo.weex.module;

import android.util.Log;
import com.scau.beyondboy.weexdemo.view.FloatWindow;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;
/**
 * @Author: beyondboy
 * @Gmail: guoli.xgl@alibaba-inc.com
 * @Date: 2016-10-26
 * @Time: 18:00
 */
public class ShowFtWdModule extends WXModule{

    private static final String TAG = ShowFtWdModule.class.getName();
    private FloatWindow mFloatWindow;
    @WXModuleAnno(runOnUIThread = true)
    public void show(){
        if(mFloatWindow==null){
            mFloatWindow=new FloatWindow(mWXSDKInstance.getContext());
//            mWXSDKInstance.addOnInstanceVisibleListener(new WXSDKInstance.OnInstanceVisibleListener() {
//                @Override
//                public void onAppear() {
//
//                }
//
//                @Override
//                public void onDisappear() {
//                    hide();
//                    mWXSDKInstance.removeOnInstanceVisibleListener(this);
//                }
//            });
        }
        mFloatWindow.show();
    }

    @WXModuleAnno(runOnUIThread = false)
    public void hide(){
        if(mFloatWindow!=null){
            mFloatWindow.hide();
           // Log.i(TAG,"mFloatWindow>>>>>>>>>>>hide");
        }
    }
}
