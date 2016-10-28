package com.scau.beyondboy.weexdemo.view;

import android.app.Activity;
import android.content.Context;
import android.graphics.PixelFormat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import com.scau.beyondboy.weexdemo.R;
import com.scau.beyondboy.weexdemo.weex.util.ScreenUtil;
/**
 * @Author: beyondboy
 * @Gmail: guoli.xgl@alibaba-inc.com
 * @Date: 2016-10-26
 * @Time: 16:02
 */
public class FloatWindow implements View.OnTouchListener {

    private static final String TAG = FloatWindow.class.getName();
    private WindowManager.LayoutParams mLayoutParams;
    WindowManager mWm;
    View mWindowView;
    private float mTouchStartX;
    private float mTouchStartY;
    private float mTouchX;
    private float mTouchY;
    private float mDiffX=0;
    private float mDiffY=0;
    private int mDeviceWidth;
    public FloatWindow(Context context){
        this.mDeviceWidth=ScreenUtil.getDisplayWidth((AppCompatActivity) context);
        mLayoutParams=new WindowManager.LayoutParams();
        mLayoutParams.height=WindowManager.LayoutParams.WRAP_CONTENT;
        mLayoutParams.width=WindowManager.LayoutParams.WRAP_CONTENT;
        mLayoutParams.format=PixelFormat.TRANSLUCENT;
       // mLayoutParams.type=WindowManager.LayoutParams.TYPE_TOAST;
        mLayoutParams.type=WindowManager.LayoutParams.TYPE_APPLICATION;
        //mLayoutParams.gravity= Gravity.LEFT | Gravity.TOP;
        mLayoutParams.gravity= Gravity.CENTER;
        mLayoutParams.flags = WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL
                | WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE;
        if(context instanceof Activity){
            mWm=((Activity) context).getWindowManager();
        }else{
            mWm= (WindowManager)context.getSystemService(Context.WINDOW_SERVICE);
        }
        LayoutInflater inflater=LayoutInflater.from(context);
        this.mWindowView=inflater.inflate(R.layout.float_window,null);
        this.mWindowView.setOnTouchListener(this);
    }
    public void setGravity(int position){
        mLayoutParams.gravity=position;
    }
    public void show(){
        if(this.mWindowView.getParent()!=null){
            this.mWm.removeView(mWindowView);
        }
        this.mWm.addView(this.mWindowView,this.mLayoutParams);
    }

    public void hide(){
        if(this.mWindowView!=null&&this.mWindowView.getParent()!=null){
            this.mLayoutParams.x=(int)-mDiffX;
            this.mLayoutParams.y=(int)-mDiffY;
            mDiffX=0;
            mDiffY=0;
            this.mWm.removeView(this.mWindowView);
        }
    }
    private void updateViewPosition(){
        this.mLayoutParams.x=(int) (mTouchX-mTouchStartX);
        this.mLayoutParams.y=(int) (mTouchY-mTouchStartY);
        mWm.updateViewLayout(mWindowView,this.mLayoutParams);
    }

    private void updateUpPosition(int diffX,int diffY){
        this.mLayoutParams.x=diffX;
        this.mLayoutParams.y=diffY;
        mWm.updateViewLayout(mWindowView,this.mLayoutParams);
    }

//    private int getX(){
//        int position=this.mLayoutParams.gravity;
//        if((position&Gravity.LEFT)==Gravity.LEFT){
//            return (int)(mTouchX-mTouchStartX);
//        }else{
//            return (int)-(mTouchX-mTouchStartX);
//        }
//    }
    @Override
    public boolean onTouch(View v, MotionEvent event) {
        mTouchX = event.getRawX();
        mTouchY = event.getRawY();
      //  Log.i(TAG,"X:>>>>"+mTouchX+"   Y:>>>>"+mTouchY);
        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                mTouchStartX =  event.getRawX()-mDiffX;
                mTouchStartY =  event.getRawY()-mDiffY;
                //Log.i(TAG,"StartX:>>>>"+mTouchStartX+"   StartY:>>>>"+mTouchStartY);
                break;
            case MotionEvent.ACTION_MOVE:
                updateViewPosition();
                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_CANCEL:
//                if(mTouchX>=this.mDeviceWidth>>1){
//                    //Log.i(TAG,"mTouchStartX:>>>>"+this.mTouchStartX+"   mTouchX:>>>>"+this.mTouchX);
//                    //mDiffX=this.mDeviceWidth-mTouchStartX;
//                    mDiffX+=this.mDeviceWidth-mDiffX;
//                   // mTouchStartX=this.mDeviceWidth-mTouchStartX;
//                }else {
//                    //mDiffX=this.mTouchStartX-this.mDeviceWidth;
//                   // mTouchX=0;
//                    mDiffX+=0-this.mDiffX;
//                }
                mDiffX= (mTouchX-mTouchStartX);
                mDiffY=(mTouchY-mTouchStartY);
                Log.i(TAG,"mTouchStartX:>>>>"+this.mTouchStartX+"   mTouchX:>>>>"+this.mTouchX);
                Log.i(TAG,"mDiffX:>>>>"+mDiffX+"   mDiffY:>>>>"+mDiffY);
                updateUpPosition((int)mDiffX,(int)mDiffY);
               // updateViewPosition();
                break;
        }
        return true;
    }
}
