// import external libs
import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Checkbox, Card } from 'antd';

// import internal libs
import constants from '../constants/global.constants';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPermissions } from 'store/permissions/actions';

function PermissionCheck(props) {
    const dispatch = useDispatch()
    const permissionState = useSelector(state => state.permissions)
    const permissionData = permissionState.list.result.data
    useEffect(()=> {
        dispatch(fetchPermissions())
    },[])

    console.log(permissionState);
    const pers = JSON.parse(permissionData)

    const [state, setState] = useState({
        phan_quyen: pers,
        allPermision: constants.PERMISSIONS.concat(props.modules),
    });

    useEffect(() => {
        const pers = JSON.parse(permissionData)
        setState((state) => ({
            ...state,
            phan_quyen: pers,
            allPermision: constants.PERMISSIONS.concat(props.modules),
        }));
    }, [props]);

    const onSubmit = () => {
        props.onEditCategory({
            ...props.selectedCategory,
            phan_quyen: JSON.stringify(state.phan_quyen),
        });
    };

    const changePermission = (value) => {
        const arrayPermission = value.split(':');
        const permissionName = arrayPermission[0];
        const permissionValue = arrayPermission[1];
        if (state.phan_quyen[permissionName]) {
            const subPermissions = state.phan_quyen[permissionName].includes(permissionValue)
                ? state.phan_quyen[permissionName].filter((e) => e !== permissionValue)
                : state.phan_quyen[permissionName].concat(permissionValue);
            setState((state) => ({
                ...state,
                phan_quyen: { ...state.phan_quyen, [permissionName]: subPermissions },
            }));
        } else {
            setState((state) => ({
                ...state,
                phan_quyen: {
                    ...state.phan_quyen,
                    [permissionName]: [].concat(permissionValue),
                },
            }));
        }
    };

    const changePermissionAll = (permission) => {
        const subPermissions = permission.subs.map((sub) => `${permission.key}/${sub.key}`);
        if (state.phan_quyen[permission.key] && state.phan_quyen[permission.key].length === subPermissions.length) {
            setState((state) => ({
                ...state,
                phan_quyen: { ...state.phan_quyen, [permission.key]: [] },
            }));
        } else {
            setState((state) => ({
                ...state,
                phan_quyen: { ...state.phan_quyen, [permission.key]: subPermissions },
            }));
        }
    };

    const renderPermissionGroup = () => {
        const currentPermissions = props.selectedCategory.phan_quyen;
        const permissionGroups = state.allPermision.map((permission) => {
            const currentPers = permission.subs.map((subPermission) => subPermission.key);
            return (
                <Col span={6} key={permission.key}>
                    <Card
                        style={{ marginTop: 16 }}
                        title={permission.name}
                        bordered={true}
                        extra={
                            <Checkbox
                                checked={currentPers.length > 0 && state.phan_quyen[permission.key] && currentPers.length === state.phan_quyen[permission.key].length}
                                value={permission.key}
                                onChange={(e) => changePermissionAll(permission)}
                            >
                                Tất cả
                            </Checkbox>
                        }
                    >
                        {permission.subs.map((subPermission) => {
                            return (
                                <p key={`${permission.key}/${subPermission.key}`}>
                                    <Checkbox
                                        value={`${permission.key}/${subPermission.key}`}
                                        checked={state.phan_quyen[permission.key] && state.phan_quyen[permission.key].includes(`${permission.key}/${subPermission.key}`)}
                                        onChange={(e) => changePermission(`${permission.key}:${e.target.value}`)}
                                    >
                                        {subPermission.name}
                                    </Checkbox>
                                </p>
                            );
                        })}
                    </Card>
                </Col>
            );
        });
        return permissionGroups;
    };

    return (
        <Row className="app-library">
            <Col span={18}>
                <h2>
                    {props.selectedCategory.title}
                </h2>
            </Col>
            <Col span={3}>
                <Button shape="round" type="primary" onClick={() => onSubmit()} block>
                    Cập nhật
                </Button>
            </Col>
            <Col span={3}>
                <Button shape="round" type="danger" onClick={() => props.onCancel()} block>
                    Hủy bỏ
                </Button>
            </Col>
            <Col span={24} className="body-content">
                <div className="clearfix">
                    <Row gutter={16}>{renderPermissionGroup()}</Row>
                </div>
            </Col>
        </Row>
    );
}

export default PermissionCheck;