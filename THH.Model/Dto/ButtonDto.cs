namespace THH.Model.Dto
{
    public class ButtonDto : BaseDto
    {
        /// <summary>
        /// 按钮名称
        /// </summary>
        public string ButtonName { get; set; }
        /// <summary>
        /// 按钮Code
        /// </summary>
        public string ButtonCode { get; set; }
        /// <summary>
        /// 按钮图标
        /// </summary>
        public string ButtonIocn { get; set; }
        /// <summary>
        /// 按钮状态
        /// </summary>
        public string Status { get; set; }
        /// <summary>
        /// 按钮类型
        /// </summary>
        public string InputType { get; set; }
        /// <summary>
        /// 按钮样式
        /// </summary>
        public string ButtonStyle { get; set; }
    }
}
