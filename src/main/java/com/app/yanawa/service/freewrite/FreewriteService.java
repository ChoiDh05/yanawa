package com.app.yanawa.service.freewrite;

import com.app.yanawa.domain.freewrite.FreewriteDTO;
import com.app.yanawa.domain.freewrite.FreewriteVO;
import com.app.yanawa.domain.freewrite.Attachment;
import com.app.yanawa.domain.freewrite.Pagination;

import java.util.List;

public interface FreewriteService {
     public void write(FreewriteDTO freewriteDTO);
    void saveAttachment(Attachment attachment);
    public List<FreewriteDTO> getList(Pagination pagination, String order);
    public int getTotal();
    public FreewriteDTO getDetail(Long id);
    public void increaseReadCount(Long id);
    public void update(FreewriteDTO freewriteDTO);
    void delete(Long id);
}
