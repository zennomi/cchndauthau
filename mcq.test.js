module.exports = {
	codeDB: [{ code: 'abcxyz', count: 10 }, { code: '123456', count: 2 }],
	mCQuestions: [
		{
			numb: 1,
			question: "Một trong những căn cứ lập KH LCNT đối với việc mua sắm hàng năm các thiết bị văn phòng, văn phòng phẩm dùng nguốn vốn chi thường xuyên là",
			options: [
				{
					content: "Quyết định phê duyệt dự án",
					isTrue: false
				},
				{
					content: "Nguồn vốn cho DA được duyệt",
					isTrue: false
				},
				{
					content: "Quyết định mua sắm được duyệt",
					isTrue: true
				},
				{
					content: "Cả 3 đáp án trên đều đúng",
					isTrue: false
				}
			]
		},
		{
			numb: 2,
			question: "Trường hợp hủy thầu, hồ sơ liên quan được lưu giữ trong khoản thời gian bao lâu kể từ khi ban hành quyết định hủy thầu",
			options: [
				{
					content: "3 tháng",
					isTrue: false
				},
				{
					content: "6 tháng",
					isTrue: false
				},
				{
					content: "12 tháng",
					isTrue: true
				},
				{
					content: "24 tháng",
					isTrue: false
				}
			]
		},
		{
			numb: 3,
			question: "Trường hợp nào sau đây không đủ tư cách hợp lệ tham dự thầu?",
			options: [
				{
					content: "DN có đăng ký thành lập, hoạt động do cơ quan có thẩm quyền của nước mà nhà thầu đang hoạt động cấp",
					isTrue: false
				},
				{
					content: "Chi nhánh hạch toán độc lập về nghiệp vụ tài chính kế toán và thuế",
					isTrue: false
				},
				{
					content: "Hộ kinh doanh cá thể",
					isTrue: false
				},
				{
					content: "Trường hợp (b) và (c)",
					isTrue: true
				}
			]
		},
		{
			numb: 4,
			question: "Đối với nhà thầu là tổ chức, nội dung nào sau đây không phải là tiêu chí đánh giá về tư cách hợp lệ của nhà thầu?",
			options: [
				{
					content: "Có tên trong danh sách mua hồ sơ mời thầu",
					isTrue: true
				},
				{
					content: "Đã đăng ký trên hệ thống mạng đấu thầu quốc gia",
					isTrue: false
				},
				{
					content: "Hạch toán tài chính độc lập",
					isTrue: false
				},
				{
					content: "Không đang trong thời gian bị cấm tham dự thầu",
					isTrue: false
				}
			]
		},
		{
			numb: 5,
			question: "Việc đánh giá nhà thầu trong thời gian bị cấm tham dự thầu thuốc nội dung đánh giá về:",
			options: [
				{
					content: "Kỹ thuật",
					isTrue: false
				},
				{
					content: "Tài chính",
					isTrue: false
				},
				{
					content: "Tư cách hợp lệ",
					isTrue: true
				},
				{
					content: "Năng lực kinh nghiệm",
					isTrue: false
				}
			]
		}
	],
	cRTests: [{

		question: `Người đại diện pháp luật của Tổng Công ty uỷ quyền thực hiện các công việc sau đây trong quá trình tham gia chào hàng cạnh tranh cho Giám đốc Công ty con (hạch toán phụ thuộc vào tổng Công ty)
	  - Ký đơn dự thầu;
	  - Ký các văn bản, tài liệu để giao dịch với bên mời thầu trong quá trình tham gia đấu thầu, kể cả văn bản đề nghị làm rõ HSYC và văn bản giải trình, làm rõ HSĐX.
	  - Tham gia quá trình thương thảo, hoàn thiện hợp đồng.
	  - Ký đơn đề nghị trong trường hợp nhà thầu có kiến nghị.
	  - Ký kết hợp đồng với chủ đầu tư nếu được lựa chọn.
	  Ban 10 xin hỏi quý Cục quản lý Đầu thầu như sau:
	  a) Nếu Người được uỷ quyền dùng dấu của Công ty con ký đơn chào hàng có hợp lệ hay không?
	  `,
		answer: `a) Trong Luật đấu thầu: Mối quan hệ khi được uỷ quyền là cá nhân với cá nhân, với vai trò đại diện hợp pháp của Nhà thầu (Tổng giám đốc công ty uỷ quyền cho công ty con hoặc chi nhánh hạch toán phụ thuộc) được quyền sử dụng con dấu của công ty con hoặc chi nhánh. 
	  Kết luận: Người được uỷ quyền dùng dấu của Công ty con ký đơn chào hàng là hợp lệ.
	  b) Vì hạch toán phụ thuộc vào Tổng công ty nên được phép bảo lãnh dự thầu và tên của bảo lãnh dự thầu là tên của Tổng công ty.
	  Kết luận: Công ty con không được làm bảo đảm dự thầu.
	  c) Được phép uỷ quyền cho công ty con ký biên bản nghiệm thu, thanh lý hợp đồng.
	  `
	}, {
		question: 'Nhà máy in C trước đây là đơn vị hạch toán phụ thuộc Tập đoàn B. Trong thời gian đó, tập đoàn B tham gia đấu thầu và khi trúng thầu thì giao một số gói thầu cho Nhà máy in C thực hiện. Hiện tại, Nhà máy in được điều chuyển nguyên trạng về Công ty cổ phần A. Trong trường hợp này, khi tham gia đấu thầu, Công ty cổ phần A có được kế thừa năng lực, kinh nghiệm của Nhà máy in C khi còn trực thuộc Tập đoàn B không?',
		answer: `-  Nghị định số 63/2014/NĐ-CP (Điều 18 Khoản 1 và Khoản 3) quy định, HSDT của nhà thầu phải bao gồm các tài liệu chứng minh năng lực, kinh nghiệm của nhà thầu, đồng thời việc đánh giá HSDT bao gồm bước đánh giá về năng lực và kinh nghiệm.
	  Liên quan đến việc tách, sáp nhập pháp nhân, tại Điều 89 và Điều 91 Bộ luật Dân sự 2015. Theo đó, sau khi tách, pháp nhân bị tách và pháp nhân được tách thực hiện quyền, nghĩa vụ dân sự của mình phù hợp với mục đích hoạt động. Sau khi sáp nhập, pháp nhân được sáp nhập chấm dứt tồn tại; quyền và nghĩa vụ dân sự của pháp nhân được sáp nhập được chuyển giao cho pháp nhân sáp nhập. Ngoài ra, đối với  các doanh nghiệp, việc tách, sáp nhập được quy định tại Luật Doanh nghiệp 2014 (Điều 193 và Điều 195).
	  Đối với trường hợp nêu trên, Nhà máy in C trước đây trực thuộc Tập đoàn B và đã được Tập đoàn B giao thực hiện một số hợp đồng in mà Tập đoàn trúng thầu.  Vì vậy, sau khi tách ra thành pháp nhân độc lập thì Nhà máy in C được hiểu là có kinh nghiệm thực hiện các hợp đồng mà trên thực tế nhà máy này đã thực hiện khi còn trực thuộc Tập đoàn B. Tiếp đó, khi Nhà máy được sáp nhập vào Nhà thầu A thì năng lực, kinh nghiệm của Nhà thầu A được hiểu là bao gồm năng lực, kinh nghiệm của Nhà máy in C trước khi được sáp nhập. Tóm lại, khi Nhà máy in C có năng lực, kinh nghiệm thực hiện hợp đồng thì năng lực, kinh nghiệm thực hiện hợp đồng này sẽ được tính vào năng lực, kinh nghiệm của Nhà thầu A sau khi Nhà máy in C được sáp nhập vào nhà thầu này.
	  `
	}
	]
}