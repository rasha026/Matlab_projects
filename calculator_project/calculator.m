function varargout = calculator(varargin)
% CALCULATOR MATLAB code for calculator.fig
%      CALCULATOR, by itself, creates a new CALCULATOR or raises the existing
%      singleton*.
%
%      H = CALCULATOR returns the handle to a new CALCULATOR or the handle to
%      the existing singleton*.
%
%      CALCULATOR('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in CALCULATOR.M with the given input arguments.
%
%      CALCULATOR('Property','Value',...) creates a new CALCULATOR or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before calculator_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to calculator_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help calculator

% Last Modified by GUIDE v2.5 19-Dec-2022 14:57:33

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @calculator_OpeningFcn, ...
                   'gui_OutputFcn',  @calculator_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before calculator is made visible.
function calculator_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to calculator (see VARARGIN)

% Choose default command line output for calculator
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes calculator wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = calculator_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;



function arith_op1_Callback(hObject, eventdata, handles)
% hObject    handle to arith_op1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of arith_op1 as text
%        str2double(get(hObject,'String')) returns contents of arith_op1 as a double


% --- Executes during object creation, after setting all properties.
function arith_op1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to arith_op1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function arith_op2_Callback(hObject, eventdata, handles)
% hObject    handle to arith_op2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of arith_op2 as text
%        str2double(get(hObject,'String')) returns contents of arith_op2 as a double


% --- Executes during object creation, after setting all properties.
function arith_op2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to arith_op2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on selection change in arith_listbox.
function arith_listbox_Callback(hObject, eventdata, handles)
% hObject    handle to arith_listbox (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns arith_listbox contents as cell array
%        contents{get(hObject,'Value')} returns selected item from arith_listbox
index_selected = get(hObject,'Value');
list = get(hObject,'String');
arith_op = list{index_selected};

set(handles.arith_operator, 'String', arith_op);

% --- Executes during object creation, after setting all properties.
function arith_listbox_CreateFcn(hObject, eventdata, handles)
% hObject    handle to arith_listbox (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: listbox controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in arith_equal.
function arith_equal_Callback(hObject, eventdata, handles)
% hObject    handle to arith_equal (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

op1=get(handles.arith_op1,'String');
op2=get(handles.arith_op2,'String');
arith_operator=get(handles.arith_operator,'String');

switch arith_operator
    case '+'
       result = str2num(op1)+ str2num(op2);
       set(handles.arith_result, 'String', result);
 
    case '-'
       result = str2num(op1)- str2num(op2); 
       set(handles.arith_result, 'String', result);
        
    case '*'
       result = str2num(op1)* str2num(op2);
       set(handles.arith_result, 'String', result);
        
    case '/'
        if any(str2num(op2)==0)
        set(handles.arith_error, 'String', 'cant devide by zero');
        else
        result = str2num(op1)/ str2num(op2);
        set(handles.arith_result, 'String', result);
        end   
end



function eq_txt_Callback(hObject, eventdata, handles)
% hObject    handle to eq_txt (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of eq_txt as text
%        str2double(get(hObject,'String')) returns contents of eq_txt as a double


% --- Executes during object creation, after setting all properties.
function eq_txt_CreateFcn(hObject, eventdata, handles)
% hObject    handle to eq_txt (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function x_axis_Callback(hObject, eventdata, handles)
% hObject    handle to x_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of x_axis as text
%        str2double(get(hObject,'String')) returns contents of x_axis as a double


% --- Executes during object creation, after setting all properties.
function x_axis_CreateFcn(hObject, eventdata, handles)
% hObject    handle to x_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function y_txt_Callback(hObject, eventdata, handles)
% hObject    handle to y_txt (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of y_txt as text
%        str2double(get(hObject,'String')) returns contents of y_txt as a double


% --- Executes during object creation, after setting all properties.
function y_txt_CreateFcn(hObject, eventdata, handles)
% hObject    handle to y_txt (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on selection change in listbox2.
function listbox2_Callback(hObject, eventdata, handles)
% hObject    handle to listbox2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns listbox2 contents as cell array
%        contents{get(hObject,'Value')} returns selected item from listbox2
index_selected = get(hObject,'Value');
list = get(hObject,'String');
arith_op = list{index_selected};

set(handles.operator_txt, 'String', arith_op);

% --- Executes during object creation, after setting all properties.
function listbox2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to listbox2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: listbox controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in equal2.
function equal2_Callback(hObject, eventdata, handles)
% hObject    handle to equal2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

arith_operator=get(handles.operator_txt,'String');
op1=get(handles.x_axis,'String');
op2=get(handles.y_txt,'String');
op1 = str2double(regexp(op1,'\d*[\.]?\d*','match'));
op2 = str2double(regexp(op2,'\d*[\.]?\d*','match'));
if isequal(op1,'')
    set(handles.error2,'string','Missing X Axis');
elseif isequal(op2,'')
    set(handles.error2,'string','Missing y  Axis');
else

    switch arith_operator
        case '+'
            result =  op1+ op2;
            set(handles.result2, 'String', result);
        case '-'
            result = op1- op2;
            set(handles.result2, 'String', result);
        case '*'
            result = op1.* op2;
            set(handles.result2, 'String', result);
        case '/'
            if any(op2==0)
                set(handles.arith_error, 'String', 'cant devide by zero');
            else
                result = op1./op2;
                set(handles.result2, 'String', result);
            end
    end
end


% --- Executes during object creation, after setting all properties.
function uibuttongroup2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to uibuttongroup2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called



% --- Executes on button press in radiobutton_x_axis.
function radiobutton_x_axis_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton_x_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% Hint: get(hObject,'Value') returns toggle state of radiobutton_x_axis


% --- Executes on button press in radiobutton_resultant.
function radiobutton_resultant_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton_resultant (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton_resultant


% --- Executes on button press in radiobutton_sine.
function radiobutton_sine_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton_sine (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton_sine


% --- Executes on button press in radiobutton_cos.
function radiobutton_cos_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton_cos (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton_cos


% --- Executes on button press in radiobutton_equation.
function radiobutton_equation_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton_equation (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton_equation


% --- Executes on button press in radiobutton_xy_axis.
function radiobutton_xy_axis_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton_xy_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton_xy_axis


% --- Executes on button press in radiobutton_y_axis.
function radiobutton_y_axis_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton_y_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton_y_axis


% --- Executes on button press in EnterButton.
function EnterButton_Callback(hObject, eventdata, handles)
% hObject    handle to EnterButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global plot_fig
selectd=get(handles.uibuttongroup2,'SelectedObject');

disp( get(selectd ,'String'));

switch get(selectd ,'String')                              
    case 'x_axis'                                          
        x = str2num(get(handles.x_axis, 'String'));        
        if(isempty(x))                                      
            set(handles.error2, 'String', 'must enter data'); 
            set(handles.error2, 'Visible', 'on');
            return
        end
        plot_fig = plot(x,0,'*r');                          
        ylim([0 1])                                         
        
    case 'y_axis'                                           
        y = str2num(get(handles.y_txt, 'String'));         
        if(isempty(y))                                      
            set(handles.error2, 'String', 'must enter data'); 
            set(handles.error2, 'Visible', 'on');
            return
        end
        plot_fig = plot(0,y,'*r');                         
        xlim([0 1])                                         
        
    case 'xy_axis'                                         
        x = str2num(get(handles.x_axis, 'String'));         
        y = str2num(get(handles.y_txt, 'String'));         
        if(isempty(x)|| isempty(y))                         
            set(handles.error2, 'String', 'must enter data'); 
            set(handles.error2, 'Visible', 'on');
            return
        end
        plot_fig = plot(x,y,'*r');                          

    case 'resultant'                                  
        res = str2num(get(handles.result2, 'String'));     
        if(isempty(res))                                  
            set(handles.error2, 'String', 'must enter data'); 
            set(handles.error2, 'Visible', 'on');
            return
        end
        plot_fig = plot(res,0,'*r');                        
        ylim([0 1])                                         
        
    case 'sine'                                         
        x = 0:0.01:360*2;                                   
        y = sind(x);                                        
        plot_fig = plot(x,y);                               
        
    case 'cos'                                        
        x = 0:0.01:360*2;                                   
        y = cosd(x);                                        
        plot_fig = plot(x,y);                               
        
    case 'equation'  
        equ = (get(handles.eq_txt, 'string'));      
         %if(isempty(equ))                                   
            %set(handles.error2, 'String', 'must enter data'); 
            %set(handles.error2, 'Visible', 'on');
           % return
         ezplot(equ,[-10,10]);
        %end
        try
            plot_fig = fplot(equ);                          
        catch
            plot_fig = fimplicit(equ);                      
        end
end



% --- Executes on button press in DeleteButton.
function DeleteButton_Callback(hObject, eventdata, handles)
% hObject    handle to DeleteButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

global plot_fig
delete(plot_fig)
