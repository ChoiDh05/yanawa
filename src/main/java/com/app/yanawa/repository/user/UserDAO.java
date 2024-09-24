package com.app.yanawa.repository.user;

import com.app.yanawa.domain.user.UserVO;
import com.app.yanawa.mapper.user.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserDAO {
    private final UserMapper userMapper;

    public void save(UserVO userVO) {
        userMapper.insert(userVO);
    }

    public boolean existsByEmail(String email) {
        return userMapper.countByEmail(email) > 0; // 0보다 크면 중복
    }
}
